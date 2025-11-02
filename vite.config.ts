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
      }),
    // Compress assets
    mode === "production" &&
      compression({
        algorithm: "brotliCompress",
      }),
  ],

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

    // Optimize chunk sizes
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunk
          vendor: ["react", "react-dom"],
        },
      },
    },

    // Increase chunk size warning limit (default is 500kb)
    chunkSizeWarningLimit: 1000,

    // Minify options
    minify: "esbuild",

    // Target modern browsers for smaller bundle
    target: "esnext",
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom"],
  },

  // Preview server config (for production build preview)
  preview: {
    port: 3001,
    host: "::",
    strictPort: false,
  },
}));
