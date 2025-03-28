import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      clientPort: 3000
    },
    proxy: {
      // Proxy API requests to local API files in development
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => {
          // Remove /api prefix and prepare to match the local API file
          const cleanPath = path.replace(/^\/api/, '');
          console.log(`API request: ${path} -> ${cleanPath}`);
          return cleanPath;
        },
        configure: (proxy) => {
          proxy.on('error', (err) => {
            console.log('Proxy error:', err);
          });
          proxy.on('proxyReq', (_, req) => {
            console.log('Proxy request:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            console.log('Proxy response:', proxyRes.statusCode, req.url);
          });
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
});
