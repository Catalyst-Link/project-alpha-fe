import type { App } from 'vue';

export function registerPlugins(app: App<Element>) {
    Object
        .values(import.meta.glob<{ install: SetupModule }>('./*.ts', { eager: true }))
        .forEach((i) => {
            i.install?.(app);
        });
}
