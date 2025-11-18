import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import compression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,
    open: true,
    strictPort: false,
  },

  plugins: [
    react(),
    mode === "production" &&
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
        filename: "dist/stats.html",
      }),
    mode === "production" &&
      compression({
        algorithm: "brotliCompress",
        ext: ".br",
        threshold: 1024,
      }),
    mode === "production" &&
      compression({
        algorithm: "gzip",
        ext: ".gz",
        threshold: 1024,
      }),
    mode === "production" &&
      viteImagemin({
        gifsicle: { optimizationLevel: 7 },
        optipng: { optimizationLevel: 7 },
        mozjpeg: { quality: 75 },
        pngquant: { quality: [0.7, 0.9] },
        svgo: {
          plugins: [
            { name: "removeViewBox" },
            { name: "removeEmptyAttrs", active: false },
          ],
        },
      }),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    sourcemap: mode === "development",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/scheduler/")
          ) {
            return "react-core";
          }
          if (id.includes("node_modules/react-router")) {
            return "react-router";
          }
          if (id.includes("node_modules/framer-motion")) {
            return "framer";
          }
          if (
            id.includes("node_modules/gsap") ||
            id.includes("node_modules/@gsap")
          ) {
            return "gsap";
          }
          if (
            id.includes("node_modules/three") ||
            id.includes("node_modules/@react-three")
          ) {
            return "three";
          }
          if (id.includes("node_modules/p5")) {
            return "p5";
          }

          if (id.includes("node_modules/styled-components")) {
            return "styled";
          }
          if (id.includes("node_modules/@radix-ui")) {
            return "radix-ui";
          }
          if (
            id.includes("node_modules/lucide-react") ||
            id.includes("node_modules/@tabler")
          ) {
            return "icons";
          }
          if (id.includes("node_modules/")) {
            return "vendor";
          }
          return undefined;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
      input: {
        main: path.resolve(__dirname, "index.html"),
        ...(mode === "production" && {
          sw: path.resolve(__dirname, "src/service-worker.ts"),
        }),
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: mode === "production" ? "terser" : "esbuild",

    terserOptions:
      mode === "production"
        ? {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ["console.log", "console.info"],
              passes: 2,
            },
            mangle: {
              safari10: true,
            },
            format: {
              comments: false,
            },
          }
        : undefined,
    cssCodeSplit: true,
    target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
    assetsInlineLimit: 4096,
    modulePreload: {
      polyfill: true,
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react/jsx-runtime",
      "react-dom",
      "react-dom/client",
      "react-router-dom",
      "@tanstack/react-query",
      "framer-motion",
      "lucide-react",
    ],
    esbuildOptions: {
      target: "esnext",
      treeShaking: true,
    },
  },
  esbuild: {
    drop: mode === "production" ? ["console", "debugger"] : [],
    legalComments: "none",
  },
  preview: {
    port: 3001,
    host: "::",
    strictPort: false,
  },
}));
