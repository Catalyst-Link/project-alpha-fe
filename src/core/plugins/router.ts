import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { handleHotUpdate, routes } from 'vue-router/auto-routes';

export function install(app: App<Element>) {
    const router = createRouter({
        history: createWebHistory(),
        routes,
    });

    if (import.meta.hot) {
        handleHotUpdate(router);
    }

    app.use(router);
}
