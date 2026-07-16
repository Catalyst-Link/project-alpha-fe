import path from 'node:path';
import Tailwindcss from '@tailwindcss/vite';
import Vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';

// // https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = {
        ...process.env,
        ...loadEnv(mode, `${process.cwd()}/environments`, ''),
    };
    const port = !Number.isNaN(Number(env.VITE_APP_DEV_PORT))
        ? Number(env.VITE_APP_DEV_PORT)
        : 8002;

    return {
        plugins: [
            // https://github.com/vuejs/core
            Vue(),

            // https://github.com/tailwindlabs/tailwindcss
            Tailwindcss(),
        ],

        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@root': path.resolve(__dirname),
                '@core': path.resolve(__dirname, 'src/core'),
                '@modules': path.resolve(__dirname, 'src/modules'),
            },
        },

        server: {
            port,
            strictPort: true,
        },
    };
});
