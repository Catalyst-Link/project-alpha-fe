import { registerLayouts } from '@core/components/layouts/index';
import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from './core/plugins';
import '@core/styles/index.css';

const app = createApp(App);

registerPlugins(app);
registerLayouts(app);

app.mount('#app');
