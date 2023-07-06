import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generouted from "@generouted/react-router/plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted()],
  resolve: {
    alias: [
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "src/assets"),
      },
      {
        find: "@common",
        replacement: path.resolve(__dirname, "src/common"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/common/components"),
      },
    ],
  },
});
