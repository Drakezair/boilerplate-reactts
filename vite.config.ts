import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@layout': path.resolve(
        __dirname,
        './src/components/common/layout/index.ts'
      ),
      '@constants': path.resolve(__dirname, './src/lib/contants/index.ts'),
      '@pages': path.resolve(__dirname, './src/pages/index.ts'),
      '@types': path.resolve(__dirname, './src/lib/types/index.d.ts'),
      '@components': path.resolve(
        __dirname,
        './src/components/common/UI/index.ts'
      )
    }
  }
});
