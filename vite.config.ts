import macrosPlugin from 'vite-plugin-babel-macros';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin(), tsconfigPaths()],
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
});
