/* eslint perfectionist/sort-imports: 0 */
import '@abraham/reflection';

import { createApp } from 'vue';
import App from './App.vue';

import { registerLayouts } from '@core/components/layouts/index';
import { registerPlugins } from '@/core/plugins';

import '@core/styles/index.css';
import './injector';

const app = createApp(App);
registerPlugins(app);
registerLayouts(app);
app.mount('#app');
