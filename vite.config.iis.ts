import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// IIS-specific Vite configuration
export default defineConfig(({ mode }) => ({
  // Base path for IIS deployment - can be customized per deployment
  // For root deployment, use "/"
  // For subdirectory deployment, use "/your-app-name/"
  base: "/",

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
    // Optimize for IIS production deployment
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "esbuild",
    
    // IIS-specific optimizations
    target: "es2015", // Better compatibility with older IIS environments
    
    // Configure for better caching with content-based hashing
    rollupOptions: {
      output: {
        // Use content-based hashing for cache busting
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        
        // IIS-specific optimizations
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs'],
        },
      },
    },

    // Increase chunk size warning threshold for IIS
    chunkSizeWarningLimit: 1000,
    
    // IIS-specific build optimizations
    cssCodeSplit: true,
    reportCompressedSize: false, // Faster builds
  },

  // IIS-specific optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },

  // Define environment variables for IIS
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    __BUILD_TYPE__: JSON.stringify('iis'),
  },
})); 