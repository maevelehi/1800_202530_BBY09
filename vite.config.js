// vite.config.js

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "login.html"),
        profile: resolve(__dirname, "profile.html"),
        "progress-tracking": resolve(__dirname, "progress-tracking.html"),
        "create-card": resolve(__dirname, "create-card.html"),
        home: resolve(__dirname, "home.html"),
      },
      output: {
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js",

        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return "assets/styles/[name]-[hash][extname]";
          }
          if (assetInfo.name.match(/\.(png|jpe?g|gif|svg|webp)$/)) {
            return "assets/images/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },

        manualChunks(id) {
          if (id.includes("src/components/site-navbar.js")) {
            return "site-navbar";
          }
          if (id.includes("src/components/site-navbarbefore.js")) {
            return "site-navbarbefore";
          }

          return null;
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },

  // 确保默认头像路径正确
  publicDir: "public",
});
