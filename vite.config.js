// This Vite config file (vite.config.js) tells Rollup (production bundler)
// to treat multiple HTML files as entry points so each becomes its own built page.

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
        // 定义所有资产（图片、CSS等）的输出文件名格式
        assetFileNames: (assetInfo) => {
          // 如果是 CSS 文件，放到 assets/css 目录下
          if (assetInfo.name.endsWith(".css")) {
            return "assets/style/[name]-[hash][extname]";
          }
          // 如果是图片文件，放到 assets/images 目录下
          if (assetInfo.name.match(/\.(png|jpe?g|gif|svg|webp)$/)) {
            return "assets/images/[name]-[hash][extname]";
          }
          // 其他所有文件（如字体）保持在 assets 根目录
          return "assets/[name]-[hash][extname]";
        },
        // 定义 JS 入口文件和代码块的输出目录
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js",
      },
    },
    chunkSizeWarningLimit: 1000,
  },

  publicDir: "public",
});
