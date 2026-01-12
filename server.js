import fs from "node:fs/promises";
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProduction = process.env.NODE_ENV === "production";

// Create Express app
const app = express();

// Serve static files
if (isProduction) {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(
    "/assets",
    sirv(resolve(__dirname, "./dist/client/assets"), {
      extensions: [],
      maxAge: 31536000,
      immutable: true,
    })
  );
} else {
  const { createServer } = await import("vite");
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });
  app.use(vite.middlewares);
}

// SSR handler
app.use("*", async (req, res, next) => {
  try {
    const url = req.originalUrl;

    let template, render;
    if (!isProduction) {
      const vite =
        res.locals.vite ||
        (await import("vite")).createServer({
          server: { middlewareMode: true },
          appType: "custom",
        });
      template = await fs.readFile(resolve(__dirname, "index.html"), "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
    } else {
      template = await fs.readFile(
        resolve(__dirname, "./dist/client/index.html"),
        "utf-8"
      );
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const { html: appHtml } = render(url);
    const html = template.replace(`<!--ssr-outlet-->`, appHtml);

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (e) {
    if (!isProduction && res.locals.vite) {
      res.locals.vite.ssrFixStacktrace(e);
    }
    console.error(e.stack);
    res.status(500).end(e.stack);
  }
});

// For Vercel serverless function
export default app;

// For local development
if (!process.env.VERCEL) {
  const port = process.env.PORT || 5173;
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}
