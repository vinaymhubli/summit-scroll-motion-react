import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base path for IIS deployment (can be customized per deployment)
  base: "./",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Optimize for production
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "esbuild",

    // Configure for better caching with content-based hashing
    rollupOptions: {
      output: {
        // Use content-based hashing for cache busting
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },

    // Increase chunk size warning threshold
    chunkSizeWarningLimit: 1000,
  },
}));
