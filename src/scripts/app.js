import anime from 'animejs';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import routes from './routes';
import App from './components/App';
import VueMeta from 'vue-meta';
require('vue-apparate');

window.axios = axios;
window.Event = new Vue();

Vue.use(VueRouter);
Vue.use(VueMeta);
VueApparate.init(Vue)

const router = new VueRouter({
  mode: 'history',
  
  scrollBehavior (to, from, savedPosition) {
    return (savedPosition) ?  savedPosition :  { x: 0, y: 0 };
  },

  root: '/',

  routes
});

router.beforeEach((to, from, next) => {
  Event.$emit('show-loader');
  setTimeout(() => {next();}, 200);
});

router.afterEach((to, from) => {
  Event.$emit('hide-loader');
});


new Vue({
  el: '#js-app',

  router,


  render: h => h(App)

});