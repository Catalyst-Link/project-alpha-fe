import path from 'node:path';
import Tailwindcss from '@tailwindcss/vite';
import Vue from '@vitejs/plugin-vue';
import fg from 'fast-glob';
import { defineConfig, loadEnv } from 'vite';
import VueRouter from 'vue-router/vite';

// https://vite.dev/config/
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
            // https://github.com/vuejs/router
            VueRouter({
                extensions: ['.vue'],
                dts: 'src/route.map.d.ts',
                routesFolder: [
                    'src/core/pages',
                    ...fg.sync(
                        'src/modules/**/pages',
                        { onlyDirectories: true },
                    ),
                ],
            }),

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
