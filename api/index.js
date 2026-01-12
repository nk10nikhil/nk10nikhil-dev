import { renderToPipeableStream } from "react-dom/server";
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let app;

async function createApp() {
  if (app) return app;

  app = express();

  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;

  app.use(
    compression({
      level: 6,
      threshold: 1024,
    })
  );

  // Add caching headers for better performance
  app.use((req, res, next) => {
    if (req.path.startsWith("/assets/")) {
      res.set({
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      });
    }
    next();
  });

  app.use(
    "/assets",
    sirv(resolve(__dirname, "../dist/client/assets"), {
      extensions: [],
      maxAge: 31536000,
      immutable: true,
      etag: true,
      setHeaders: (res) => {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      },
    })
  );

  // SSR handler with streaming
  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;

      const templatePath = resolve(__dirname, "../dist/client/index.html");
      const template = fs.readFileSync(templatePath, "utf-8");
      const [htmlStart, htmlEnd] = template.split(`<!--ssr-outlet-->`);

      const { render } = await import("../dist/server/entry-server.js");

      res.status(200);
      res.set({
        "Content-Type": "text/html",
        "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
        "X-Content-Type-Options": "nosniff",
      });

      // Send the HTML start immediately
      res.write(htmlStart);

      const { pipe } = renderToPipeableStream(render(url), {
        onShellReady() {
          pipe(res);
        },
        onShellError(error) {
          console.error(error);
          res.status(500).send("Internal Server Error");
        },
        onAllReady() {
          res.write(htmlEnd);
          res.end();
        },
      });
    } catch (e) {
      console.error(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return app;
}

export default async function handler(req, res) {
  const app = await createApp();
  return app(req, res);
}
