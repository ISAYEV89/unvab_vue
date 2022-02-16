import Vue from 'vue'
import App from './App.vue'
//import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './routes'
import { routes } from './router/index'

const routera = new VueRouter({
  routes
});

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import myContact from './component/Contact'
Vue.component('myContact', myContact);

import myfooter from './component/myfooter'
Vue.component('myfooter', myfooter);

import Mysvg from './component/Mysvg'
Vue.component('Mysvg', Mysvg);

import navmenu from './component/navmenu'
Vue.component('navmenu', navmenu);

new Vue({
  el: '#app',
  router: routera,
  render: h => h(App),
  mode : 'history',
});



