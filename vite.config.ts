import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  return {
    plugins: [react()],
    base: "/rss_react/",
    resolve: {
      alias: [
        { find: "@src", replacement: resolve(__dirname, "./src") },
        { find: "@shared", replacement: resolve(__dirname, "./src/shared") },
        { find: "@app", replacement: resolve(__dirname, "./src/app") },
        { find: "@widgets", replacement: resolve(__dirname, "./src/widgets") },
        { find: "@pages", replacement: resolve(__dirname, "./src/pages") },
        { find: "@features", replacement: resolve(__dirname, "./src/features") },
        { find: "@entities", replacement: resolve(__dirname, "./src/entities") },
      ],
    },
    define: {
      "process.env": process.env,
    },
  };
});
