import anime from 'animejs'
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './routes'
import App from './components/App'
import NProgress from 'vue-nprogress';

window.axios = axios
window.Event = new Vue()

Vue.use(VueRouter)
Vue.use(NProgress)

const nprogress = new NProgress({ parent: '.nprogress-container' })

const router = new VueRouter({
  mode: 'history',
  
  scrollBehavior (to, from, savedPosition) {
    /*if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }*/
    return (savedPosition) ?  savedPosition :  { x: 0, y: 0 };
  },

  root: '/',

  routes
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from) => {
  Event.$emit('routerToggle')
})


new Vue({
  el: '#js-app',

  router,

  nprogress,
  
  render: h => h(App)

})