import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer"; // Bundle analysis
import compression from "vite-plugin-compression"; // Gzip/Brotli compression

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,
    open: true, // Auto-open browser on server start
    strictPort: false, // Try next available port if 3000 is busy
  },

  plugins: [
    react(),
    // Analyze bundle size
    mode === "production" &&
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
        filename: "dist/stats.html",
      }),
    // Compress assets with Brotli
    mode === "production" &&
      compression({
        algorithm: "brotliCompress",
        ext: ".br",
        threshold: 1024, // Only compress files larger than 1KB
      }),
    // Also add Gzip compression for broader compatibility
    mode === "production" &&
      compression({
        algorithm: "gzip",
        ext: ".gz",
        threshold: 1024,
      }),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Output directory
    outDir: "dist",

    // Generate sourcemaps for production (optional, remove if not needed)
    sourcemap: mode === "development",

    // Optimize chunk sizes with simplified, reliable splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React - must stay together
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/scheduler")
          ) {
            return "react-core";
          }

          // Heavy animation libraries
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

          // UI component libraries
          if (id.includes("node_modules/@radix-ui")) {
            return "radix-ui";
          }

          // Large icon libraries
          if (
            id.includes("node_modules/lucide-react") ||
            id.includes("node_modules/@tabler")
          ) {
            return "icons";
          }

          // All other node_modules
          if (id.includes("node_modules/")) {
            return "vendor";
          }

          // App code - let Vite decide
          return undefined;
        },
        // Optimize asset file names
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
      input: path.resolve(__dirname, "index.html"),
    },

    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,

    // Minify options - use terser for better compression in production
    minify: mode === "production" ? "terser" : "esbuild",

    terserOptions:
      mode === "production"
        ? {
            compress: {
              drop_console: true, // Remove console.logs in production
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

    // CSS code splitting
    cssCodeSplit: true,

    // Target modern browsers for smaller bundle
    target: "esnext",

    // Reduce render-blocking resources
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb

    // Enable module preload for better loading performance
    modulePreload: {
      polyfill: true,
    },
  },

  // Optimize dependencies - include all to avoid runtime optimization delays
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
    // Don't exclude heavy libraries - let Vite optimize them upfront
    esbuildOptions: {
      target: "esnext",
    },
  },

  // Preview server config (for production build preview)
  preview: {
    port: 3001,
    host: "::",
    strictPort: false,
  },
}));
