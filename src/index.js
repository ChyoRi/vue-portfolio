// Import
import { createApp } from 'vue';
import App from './App.vue';
import store from '@plugins/store';
import router from '@plugins/router';
import mitt from 'mitt';
import '@public/index.scss';

// Variable
const emitter = mitt();
const app = createApp(App);

// Config
app.config.globalProperties.emitter = emitter;
app.use(router);
app.use(store);

// Mount
app.mount('#root');