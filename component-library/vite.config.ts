import { defineConfig } from 'vitest/config';
import preact from '@preact/preset-vite';
import dns from 'node:dns';
import { resolve } from 'node:path';
import pkg from './package.json' assert { type: 'json' };

const externalDependencies = Object.keys(pkg.dependencies);


// This forces Vite to use `localhost` instead of `127.0.0.1`. Otherwise, we run into CORS issues
// since `localhost:8080` and `localhost:8082` are same-origin, but `127.0.0.1:8082` isn't.
dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {


    return {
        envDir: resolve(__dirname),
        build:{
            lib: {
                name: 'ComponentLibrary',
                entry: resolve(__dirname, 'src/index.ts'),
                formats: ['es'],
                fileName: 'component-library'
            },
            minify: true,
            rollupOptions: { external: externalDependencies },
            outDir: resolve(__dirname, 'dist'),
            emptyOutDir: false
        },
        plugins: [preact()].filter(Boolean)
    };
});
