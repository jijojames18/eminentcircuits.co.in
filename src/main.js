import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import Axios from 'axios';
import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    libraries: 'places'
  }
});

Vue.config.productionTip = false;

Axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT_URL;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
