import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    component: () => import(/* webpackChunkName: "about" */ '../views/Marketplace.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
