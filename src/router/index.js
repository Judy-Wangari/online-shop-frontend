import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'
import Profile from '@/components/Profile.vue'
import Admin from '@/components/Admin.vue'
import Products from '@/components/Products.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import Orders from '@/components/Orders.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },    
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
     {
      path: '/products',
      name: 'products',
      component: Products,
    },
     {
      path: '/productDetails',
      name: 'productDetails',
      component: ProductDetails,
    },
     {
      path: '/orders',
      name: 'orders',
      component: Orders,
    },
    ],
})


export default router
