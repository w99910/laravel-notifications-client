import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    // lib: {
    //     entry: "./src/index.js",
    //     name: "",
    //     formats: ["es", "cjs"],
    //     fileName: (format) =>
    //         `notification.${format === "es" ? "js" : "cjs"}`,
    // },
    lib: {
      // The entry file for your component
      entry: path.resolve(__dirname, "src/index.js"),
      // The name for the global variable in UMD builds
      name: "Notification",
      // The filenames for the different formats
      fileName: (format) => `notification.${format}.js`,
    },
    outDir: "./dist/",
    emptyOutDir: true,
    cssCodeSplit: false, // Generate a single CSS file
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library (like Vue itself)
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          // Generate CSS with a consistent name
          if (assetInfo.name === "style.css") {
            return "notification.css";
          }
          return assetInfo.name;
        },
      },
    },
  },
});
