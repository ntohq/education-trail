import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default {
    appType: 'custom',
    root: 'client-assets',
    build: {
        manifest: true,
        outDir: '../dist',
        emptyOutDir: true,
        assetsDir: '',
        rollupOptions: {
            input: {
                main: 'client-assets/main.js',
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            }
        },
    },
    server: {
        port: 5173,
        strictPort: true,
        hmr: {
            clientPort: 5173
        }
    },
    plugins: [vue()]
}