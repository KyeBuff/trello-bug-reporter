// vite.config.ts
import path from "path";
import { defineConfig } from "file:///Users/kye/Sites/lunar-bug-tool/node_modules/vite/dist/node/index.js";
import react from "file:///Users/kye/Sites/lunar-bug-tool/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: path.resolve("src", "main.tsx"),
      name: "lunar-bug-tool",
      fileName: (format) => `lunar-bug-tool.${format}.js`
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React"
        }
      }
    }
  },
  plugins: [react()],
  define: {
    "process.env": {
      NODE_ENV: "production"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva3llL1NpdGVzL2x1bmFyLWJ1Zy10b29sXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMva3llL1NpdGVzL2x1bmFyLWJ1Zy10b29sL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9reWUvU2l0ZXMvbHVuYXItYnVnLXRvb2wvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKFwic3JjXCIsIFwibWFpbi50c3hcIiksXG4gICAgICBuYW1lOiBcImx1bmFyLWJ1Zy10b29sXCIsXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGx1bmFyLWJ1Zy10b29sLiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgZGVmaW5lOiB7XG4gICAgXCJwcm9jZXNzLmVudlwiOiB7XG4gICAgICBOT0RFX0VOVjogXCJwcm9kdWN0aW9uXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErUSxPQUFPLFVBQVU7QUFDaFMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLE9BQU8sVUFBVTtBQUFBLE1BQ3JDLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLGtCQUFrQixNQUFNO0FBQUEsSUFDaEQ7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ04sZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
