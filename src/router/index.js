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
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/pages/setting/setting.vue'),

    },
    {
      path: '/setting/setInfo/setInfo01',
      name: 'setInfo01',
      component: () => import('@/pages/setting/setInfo/setInfo01.vue')
    },
    {
      path: '/setting/setInfo/setInfo02',
      name: 'setInfo02',
      component: () => import('@/pages/setting/setInfo/setInfo02.vue')
    },
    {
      path: '/setting/setInfo/setInfo03',
      name: 'setInfo03',
      component: () => import('@/pages/setting/setInfo/setInfo03.vue')
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: () => import('@/pages/setting/orderList.vue')
    },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
