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
                settings: resolve(__dirname, "settings.html"),
                "create-card": resolve(__dirname, "create-card.html"),
                home: resolve(__dirname, "home.html")
            }
        }
    }
});
