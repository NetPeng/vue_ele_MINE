import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods';
import seller from './components/seller/seller';
import ratings from './components/ratings/ratings';


Vue.use(VueRouter);
Vue.use(VueResource);

var app = Vue.extend(App);
const router = new VueRouter({
  linkActiveClass: 'active'
});
router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});
router.start(app, '#app');
router.go('/goods');
/* eslint-disable no-new */
/* new Vue({
  el: 'body',
  components: { App }
}) */
