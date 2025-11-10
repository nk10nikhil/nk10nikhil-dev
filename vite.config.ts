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
        manualChunks: (id) => {
          // React core libraries
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom")
          ) {
            return "react-vendor";
          }

          // Router
          if (id.includes("node_modules/react-router")) {
            return "router-vendor";
          }

          // Animation libraries - split by type
          if (id.includes("node_modules/framer-motion")) {
            return "framer-motion";
          }

          if (
            id.includes("node_modules/gsap") ||
            id.includes("node_modules/@gsap")
          ) {
            return "gsap-vendor";
          }

          // Three.js and related (heavy)
          if (
            id.includes("node_modules/three") ||
            id.includes("node_modules/@react-three")
          ) {
            return "three-vendor";
          }

          // P5.js (heavy)
          if (
            id.includes("node_modules/p5") ||
            id.includes("node_modules/react-p5")
          ) {
            return "p5-vendor";
          }

          // UI libraries
          if (
            id.includes("node_modules/lucide-react") ||
            id.includes("node_modules/@tabler/icons")
          ) {
            return "icons-vendor";
          }

          // Radix UI components
          if (id.includes("node_modules/@radix-ui")) {
            return "radix-vendor";
          }

          // Form libraries
          if (
            id.includes("node_modules/react-hook-form") ||
            id.includes("node_modules/@hookform") ||
            id.includes("node_modules/zod")
          ) {
            return "form-vendor";
          }

          // Utility libraries
          if (
            id.includes("node_modules/clsx") ||
            id.includes("node_modules/tailwind-merge") ||
            id.includes("node_modules/class-variance-authority")
          ) {
            return "utils-vendor";
          }

          // Other node_modules
          if (id.includes("node_modules")) {
            return "vendor";
          }

          // Return undefined for non-vendor code (app code)
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

  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@tanstack/react-query",
      "framer-motion",
      "lucide-react",
    ],
    exclude: [
      "@react-three/fiber",
      "@react-three/drei",
      "three",
      "p5",
      "react-p5",
    ], // Exclude heavy 3D libraries from pre-bundling
  },

  // Preview server config (for production build preview)
  preview: {
    port: 3001,
    host: "::",
    strictPort: false,
  },
}));
