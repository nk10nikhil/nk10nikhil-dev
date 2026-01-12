import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import compression from "compression";
import sirv from "sirv";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

// Cached production assets
const templateHtml = isProduction
  ? fs.readFileSync("./dist/client/index.html", "utf-8")
  : "";
const ssrManifest = isProduction
  ? fs.readFileSync("./dist/client/.vite/ssr-manifest.json", "utf-8")
  : undefined;

async function createServer() {
  const app = express();

  let vite;
  if (!isProduction) {
    // Create Vite server in middleware mode
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
      base,
    });
    // Use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    // Compression and static file serving for production
    app.use(compression());
    app.use(base, sirv("./dist/client", { extensions: [] }));
  }

  // Serve HTML
  app.use("/", async (req, res) => {
    try {
      const url = req.originalUrl.replace(base, "");

      let template;
      let render;
      if (!isProduction) {
        // Always read fresh template in development
        template = fs.readFileSync("./index.html", "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
        template = templateHtml;
        render = (await import("./dist/server/entry-server.js")).render;
      }

      const rendered = await render(url, ssrManifest);

      const html = template
        .replace(`<!--ssr-outlet-->`, rendered.html ?? "")
        .replace(`<!--ssr-head-->`, rendered.head ?? "");

      res.status(200).set({ "Content-Type": "text/html" }).send(html);
    } catch (e) {
      vite?.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}

createServer();
