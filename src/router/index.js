import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export const routes = [{
  path: '/home',
  name: 'home',
  component: () => import("@/views/home.vue"),
}, ]
export default new Router({
  routes: routes
})