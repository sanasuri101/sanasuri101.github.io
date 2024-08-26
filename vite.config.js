import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "./sanasuri101.github.io",
  optimizeDeps: {
    // include: ['linked-dep'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      // include: [/linked-dep/, /node_modules/],
    },
  },
});
