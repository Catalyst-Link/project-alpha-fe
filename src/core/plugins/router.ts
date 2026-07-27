import type { App } from 'vue';
import NProgress from 'nprogress';
import { createRouter, createWebHistory } from 'vue-router';
import { handleHotUpdate, routes } from 'vue-router/auto-routes';

function handleAuthGuard() {
    const authStore = useAuthStore();

    if (!authStore.token) {
        authStore.logout();
    }
}

export function install(app: App<Element>) {
    const router = createRouter({
        history: createWebHistory(),
        routes,
    });

    if (import.meta.hot) {
        handleHotUpdate(router);
    }

    router.beforeEach((to, _, next) => {
        window.scrollTo(0, 0);

        if (to.matched.some(record => record.meta.requiresAuth)) {
            handleAuthGuard();
        }
        else {
            next();
        }

        NProgress.start();
    });

    router.afterEach(() => {
        NProgress.done();
    });

    app.use(router);
}
