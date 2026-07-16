import type { App } from 'vue';
import { createPersistedState } from 'pinia-plugin-persistedstate';

export function install(app: App<Element>) {
    const pinia = createPinia();

    pinia.use(
        createPersistedState({
            storage: sessionStorage,
            key: id => `__persisted__${id}`,
        }),
    );

    app.use(pinia);
}
