import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/dashboard/index.vue'
import ProductDetail from '@/components/product/detail'
import ProductList from '@/components/product/list'
import Profile from '@/components/profile'
import Setting from '@/components/setting'
import UserDetail from '@/components/user/detail'
import UserList from '@/components/user/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/product',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/user',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/user/:id',
      name: 'UserDetail',
      component: UserDetail
    }
  ]
})
