import Tailwindcss from '@tailwindcss/vite';
import Vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        // https://github.com/vuejs/core
        Vue(),

        // https://github.com/tailwindlabs/tailwindcss
        Tailwindcss(),
    ],
});
