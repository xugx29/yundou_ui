import Vue from 'vue'
import test from './textComp'
import Router from 'vue-router'
Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [{
    path: '/index',
    name: 'welcome',
    component: test
  }
  ]
})
