import type { App } from 'vue';
import { createI18n } from 'vue-i18n';

const messages = Object.fromEntries(
    Object
        .entries(import.meta.glob('../locales/*.{yaml,yml,json}', { eager: true }))
        .map(([key, value]: any) => {
            const name = key.substring(key.lastIndexOf('/') + 1).replace(/\.[^/.]+$/, '');
            return [name, value.default];
        }),
);

export function install(app: App<Element>) {
    const i18n = createI18n({
        locale: 'en-US',
        fallbackLocale: 'en-US',
        legacy: false,
        globalInjection: true,
        runtimeOnly: false,
        messages,
    });

    app.use(i18n);
}
