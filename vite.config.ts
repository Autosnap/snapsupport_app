import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // Import path module

export default defineConfig({
  base: "/autosnap-snapsupport/", // GitHub Pages configuration
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Fix path alias for imports
    },
  },
});
