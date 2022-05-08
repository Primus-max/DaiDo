import { createApp } from 'vue';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import App from './App.vue';
import router from './router';
import store from './store';

import "uikit/dist/css/uikit.min.css"

// loads the Icon plugin
UIkit.use(Icons);

createApp(App).use(store).use(router).mount('#app')