import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        dashboard: 'src/dashboard-entry.tsx',
        navigation: 'src/navigation-entry.tsx',
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
});
