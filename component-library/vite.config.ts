import { defineConfig } from 'vitest/config';
import preact from '@preact/preset-vite';
import { resolve } from 'node:path';
import pkg from './package.json' assert { type: 'json' };

const externalDependencies = Object.keys(pkg.dependencies);

// https://vitejs.dev/config/
export default defineConfig({
    envDir: resolve(__dirname),
    build: {
        lib: {
            name: 'ComponentLibrary',
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: 'component-library'
        },
        minify: true,
        rollupOptions: {external: externalDependencies},
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: false
    },
    plugins: [preact()].filter(Boolean)
});
