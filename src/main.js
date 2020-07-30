import Vue from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueMask from 'vue-the-mask';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import * as Helpers from './helpers';

Vue.use(Vuelidate);
Vue.use(VueMask);

Vue.config.productionTip = false;

Vue.prototype.Helpers = Helpers;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
