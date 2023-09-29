import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("src", "main.tsx"),
      name: "lunar-bug-tool",
      fileName: (format) => `lunar-bug-tool.${format}.js`,
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
});
