import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mac-reminders-clone/",
  plugins: [react()],
  resolve: {
    alias: {
      "@stores": "/src/stores",
      "@features": "/src/features",
    },
  },
});
