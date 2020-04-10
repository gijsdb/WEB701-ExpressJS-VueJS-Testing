import VueRouter from 'vue-router';
import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import GoogleSignInButton from 'vue-google-signin-button-directive';
import App from './App.vue';
import store from './store';
import router from './router';


import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  GoogleSignInButton,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
