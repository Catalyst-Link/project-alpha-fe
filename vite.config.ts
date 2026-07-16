import path from 'node:path';
import Tailwindcss from '@tailwindcss/vite';
import Vue from '@vitejs/plugin-vue';
import fg from 'fast-glob';
import AutoImport from 'unplugin-auto-import/vite';
import Icon from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from 'vite';
import VueDevTools from 'vite-plugin-vue-devtools';
import { VueRouterAutoImports } from 'vue-router/unplugin';
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

            // https://github.com/vuejs/devtools
            VueDevTools(),

            // https://github.com/vuejs/core
            Vue(),

            // https://github.com/tailwindlabs/tailwindcss
            Tailwindcss(),

            // https://github.com/unplugin/unplugin-auto-import
            AutoImport({
                dts: 'src/import.map.d.ts',
                vueTemplate: true,
                imports: [
                    'vue',
                    'pinia',
                    '@vueuse/core',
                    'date-fns',
                    'vee-validate',
                    'vue-i18n',
                    'vue-router',
                    VueRouterAutoImports,
                    {
                        'axios': [['default', 'axios']],
                        '@unhead/vue': ['useHead', 'useSeoMeta'],
                        'vue-router/auto': [''],
                        'vee-validate': ['useForm'],
                        '@vee-validate/yup': ['toTypedSchema'],
                        'yup': ['object', 'string', 'number', 'array', 'mixed', 'date', 'boolean', 'tuple', 'setLocale', ['ref', 'yRef'], 'addMethod', 'setLocale'],
                        'vue-sonner': ['toast'],
                        '@tanstack/vue-query': ['useQuery', 'useMutation', 'useQueryClient', 'QueryClient', 'QueryClientProvider'],
                        'clsx': ['clsx'],
                        'tailwind-merge': ['twMerge'],
                        'class-variance-authority': ['cva'],
                    },
                ],
                dirs: [
                    'src/core/builders/**',
                    'src/core/composables/**',
                    'src/core/constants/**',
                    'src/core/endpoints/**',
                    'src/core/exceptions/**',
                    'src/core/services/**',
                    'src/core/stores/**',
                    'src/core/types/**',
                    'src/core/utils/**',

                    'src/modules/**/builders/**',
                    'src/modules/**/composables/**',
                    'src/modules/**/constants/**',
                    'src/modules/**/endpoints/**',
                    'src/modules/**/exceptions/**',
                    'src/modules/**/services/**',
                    'src/modules/**/stores/**',
                    'src/modules/**/types/**',
                    'src/modules/**/utils/**',
                ],
            }),

            // https://github.com/unplugin/unplugin-vue-components
            Components({
                dts: 'src/component.map.d.ts',
                extensions: ['vue'],
                include: [
                    /\.vue$/,
                    /\.vue\?vue/,
                ],
                dirs: [
                    'src/core/components',
                    'src/modules/**/components',
                ],
                resolvers: [
                    (componentName) => {
                        if (componentName === 'Icon') {
                            return {
                                name: 'Icon',
                                from: '@iconify/vue',
                            };
                        }
                    },
                ],
            }),

            // https://github.com/unplugin/unplugin-icons
            Icon({
                autoInstall: true,
            }),
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
