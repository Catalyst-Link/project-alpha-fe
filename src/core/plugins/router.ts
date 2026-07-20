import type { App } from 'vue';
import NProgress from 'nprogress';
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

    router.beforeEach(() => {
        window.scrollTo(0, 0);
        NProgress.start();
    });

    router.afterEach(() => {
        NProgress.done();
    });

    app.use(router);
}
