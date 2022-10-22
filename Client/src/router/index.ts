import { createRouter, createWebHistory } from 'vue-router'
import cadditem from '../components/company/additem.vue'
import cedititem from '../components/company/edititem.vue'
import cindex from '../components/company/index.vue'
import citem from '../components/company/item.vue'
import clogin from '../components/company/login.vue'
import corder from '../components/company/order.vue'
import cprofile from '../components/company/profile.vue'
import cshop from '../components/company/shop.vue'
import uindex from '../components/user/index.vue'
import uitem from '../components/user/item.vue'
import ulogin from '../components/user/login.vue'
import uorder from '../components/user/order.vue'
import uprofile from '../components/user/profile.vue'
import ushopping from '../components/user/shopping.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/company/edit_item/:id',
      component: cedititem
    },
    {
      path: '/company/add_item/:id',
      component: cadditem
    },
    {
      path: '/company/shop',
      component: cshop
    },
    {
      path: '/company/order',
      component: corder
    },
    {
      path: '/company/item/:id',
      component: citem
    },
    {
      path: '/company/profile',
      component: cprofile
    },
    {
      path: '/company/login',
      component: clogin
    },
    {
      path: '/company',
      component: cindex
    },
    {
      path: '/user/order',
      component: uorder
    },
    {
      path: '/user/shooping',
      component: ushopping
    },
    {
      path: '/user/item/:id',
      component: uitem
    },
    {
      path: '/user/profile',
      component: uprofile
    },
    {
      path: '/user/login',
      component: ulogin
    },
    {
      path: '/user',
      component: uindex
    }
  ]
})

export default router
