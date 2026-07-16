import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig(env =>
    mergeConfig(
        viteConfig(env),
        {
            test: {
                environment: 'happy-dom',
                globals: true,
                include: ['src/**/*.test.ts'],
                reporters: ['html'],
                coverage: {
                    provider: 'v8',
                    reporter: ['text', 'json', 'html'],
                    include: ['src/**/*.ts'],
                    all: true,
                    exclude: [
                        'src/**/*.test.ts',
                        'src/main.ts',
                        'src/**/*.d.ts',
                        'vite.config.ts',
                        'src/core/plugins/**',
                        'src/core/types/**',
                    ],
                },
            },
        },
    ),
);
