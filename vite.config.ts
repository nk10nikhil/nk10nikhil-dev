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

    // Optimize chunk sizes with better splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // React core libraries
          "react-vendor": ["react", "react-dom"],

          // Router if you're using it
          "router-vendor": ["react-router-dom"],

          // UI libraries (adjust based on what you're using)
          "ui-vendor": ["framer-motion", "lucide-react"],

          // Utility libraries
          utils: ["clsx", "tailwind-merge"],

          // Any other heavy dependencies you have
          // Check your stats.html after build to identify large deps
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

    // Minify options
    minify: "esbuild",

    // CSS code splitting
    cssCodeSplit: true,

    // Target modern browsers for smaller bundle
    target: "esnext",

    // Reduce render-blocking resources
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@tanstack/react-query",
    ],
    exclude: [], // Add any deps you want to exclude from pre-bundling
  },

  // Preview server config (for production build preview)
  preview: {
    port: 3001,
    host: "::",
    strictPort: false,
  },
}));
