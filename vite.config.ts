import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/demos/react-frontend-demo/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
