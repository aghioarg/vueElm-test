import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [{
      path: '/',
      name: 'index',
      component: () => import('@/pages/index.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/pages/search.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/pages/order.vue')
    },
    {
      path: '/myself',
      name: 'myself',
      component: () => import('@/pages/myself.vue')
    }
  ]
})
