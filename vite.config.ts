import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        Components({
            dirs: ['src/components'],
            dts: true,
        }),
        AutoImport({
            imports: ['vue', '@vueuse/core'],
            dirs: ['src/composables', 'src/constants', 'src/utils'],
            vueTemplate: true,
            dts: true,
            eslintrc: {
                enabled: true,
                filepath: './.eslintrc-auto-import.json',
            },
        }),
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        allowedHosts: true,
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});
