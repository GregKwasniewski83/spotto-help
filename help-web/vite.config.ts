import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import fs from 'fs';

// Check if assets directory exists
const assetsDir = path.resolve(__dirname, '../assets/images');
const hasAssets = fs.existsSync(assetsDir);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Only copy assets if directory exists
    ...(hasAssets ? [viteStaticCopy({
      targets: [
        {
          src: '../assets/images/**/*',
          dest: 'assets/images'
        }
      ]
    })] : [])
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@docs': path.resolve(__dirname, '../docs')
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'markdown': ['react-markdown', 'rehype-highlight', 'remark-gfm', 'rehype-slug', 'rehype-autolink-headings']
        }
      }
    }
  },
  server: {
    port: 3001
  }
});
