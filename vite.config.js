import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      // Add the dts plugin
      insertTypesEntry: true, // Automatically add a types entry to package.json
      outputDir: 'dist', // Output the .d.ts files to the dist folder
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Point to your library's TypeScript entry file
      name: 'm3-ui',
      fileName: (format) => `m3-ui.${format}.js`,
    },
    rollupOptions: {
      // Externalize dependencies like React and ReactDOM
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
