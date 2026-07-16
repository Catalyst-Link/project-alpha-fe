import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import '@core/styles/index.css';

const app = createApp(App);

app
    .use(router)
    .mount('#app');
