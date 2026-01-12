import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ command, mode }) => {
  const isSSR = process.argv.includes("--ssr");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ["console.info", "console.debug", "console.warn"],
        },
      },
      rollupOptions: {
        output: {
          ...(isSSR
            ? {
                // SSR build - no manual chunks
                format: "es",
              }
            : {
                // Client build - with manual chunks
                manualChunks: {
                  "react-vendor": ["react", "react-dom", "react-router-dom"],
                  motion: ["framer-motion"],
                  ui: ["@radix-ui/react-tooltip", "@radix-ui/react-slot"],
                  query: ["@tanstack/react-query"],
                },
                chunkFileNames: "assets/js/[name]-[hash].js",
                entryFileNames: "assets/js/[name]-[hash].js",
                assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
              }),
        },
      },
      cssCodeSplit: true,
      sourcemap: false,
      target: "esnext",
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1000,
    },
    ssr: {
      noExternal: ["styled-components"],
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom"],
      exclude: ["@vite/client", "@vite/env"],
    },
    server: {
      hmr: {
        overlay: false,
      },
    },
    preview: {
      port: 5173,
    },
  };
});
