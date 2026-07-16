import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from './core/plugins';
import '@core/styles/index.css';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
