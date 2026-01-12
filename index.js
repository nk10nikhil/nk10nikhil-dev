import fs from "node:fs/promises";
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let app;

async function createApp() {
  if (app) return app;

  app = express();

  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;

  app.use(compression());
  app.use(
    "/assets",
    sirv(resolve(__dirname, "../dist/client/assets"), {
      extensions: [],
      maxAge: 31536000,
      immutable: true,
    })
  );

  // SSR handler
  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;

      const template = await fs.readFile(
        resolve(__dirname, "../dist/client/index.html"),
        "utf-8"
      );
      const { render } = await import("../dist/server/entry-server.js");

      const { html: appHtml } = render(url);
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
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
