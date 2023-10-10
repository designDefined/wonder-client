import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app/javascript/App/"),
      timers: "rollup-plugin-node-polyfills/polyfills/timers",
    },
  },

  plugins: [react()],
});
