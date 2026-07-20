import type { VueQueryPluginOptions } from '@tanstack/vue-query';
import type { App } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

export function install(app: App<Element>) {
    const options: VueQueryPluginOptions = {
        queryClientConfig: {
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    retry: 1,
                },
            },
        },
    };

    app.use(VueQueryPlugin, options);
}
