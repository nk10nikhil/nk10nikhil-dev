// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
//   build: {
//     minify: false,
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           react: ["react", "react-dom", "react-router-dom"],
//           motion: ["framer-motion", "motion"],
//           gsap: ["gsap", "@gsap/react"],
//           radix: [
//             "@radix-ui/react-accordion",
//             "@radix-ui/react-alert-dialog",
//             "@radix-ui/react-aspect-ratio",
//             "@radix-ui/react-avatar",
//             "@radix-ui/react-checkbox",
//             "@radix-ui/react-collapsible",
//             "@radix-ui/react-context-menu",
//             "@radix-ui/react-dialog",
//             "@radix-ui/react-dropdown-menu",
//             "@radix-ui/react-hover-card",
//             "@radix-ui/react-label",
//             "@radix-ui/react-menubar",
//             "@radix-ui/react-navigation-menu",
//             "@radix-ui/react-popover",
//             "@radix-ui/react-progress",
//             "@radix-ui/react-radio-group",
//             "@radix-ui/react-scroll-area",
//             "@radix-ui/react-select",
//             "@radix-ui/react-separator",
//             "@radix-ui/react-slider",
//             "@radix-ui/react-slot",
//             "@radix-ui/react-switch",
//             "@radix-ui/react-tabs",
//             "@radix-ui/react-toast",
//             "@radix-ui/react-toggle",
//             "@radix-ui/react-toggle-group",
//             "@radix-ui/react-tooltip",
//           ],
//           query: ["@tanstack/react-query"],
//           icons: ["lucide-react", "react-icons"],
//           styled: ["styled-components"],
//           utils: ["clsx", "tailwind-merge", "class-variance-authority"],
//         },
//       },
//     },
//   },
//   ssr: {
//     noExternal: ["styled-components"],
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
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
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
        pure_funcs: ["console.info", "console.debug", "console.warn"],
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          ui: ["@radix-ui/react-tooltip", "@radix-ui/react-slot"],
          query: ["@tanstack/react-query"],
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
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
});
