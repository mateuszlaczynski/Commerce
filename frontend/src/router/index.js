import { createRouter, createWebHistory } from 'vue-router'
import store from "../store"
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Contact from '../views/Contact.vue'
import Category from '../views/Category.vue'
import CategoryList from '../views/CategoryList.vue'
import Search from '../views/Search.vue'
import Cart from '../views/Cart.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import LogOut from '../views/LogOut.vue'
import Checkout from '../views/Checkout.vue'
import Success from '../views/Success.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/:category_slug/:product_slug/",
    name: "Detail",
    component: Detail
  },
  {
    path:"/contact",
    name:"Contact",
    component: Contact
  },
  {
    path:"/:category_slug/",
    name: "Category",
    component: Category
  },
  {
    path:"/categories/",
    name: "CategoryList",
    component: CategoryList
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path:"/sign-up",
    name: "SignUp",
    component: SignUp
  }, 
  {
    path:"/log-in",
    name: "LogIn",
    component: LogIn
  },
  {
    path:"/log-out",
    name: "LogOut",
    component: LogOut,
    meta: {
      requeredLogin: true
    }
  },
  {
  path:"/checkout",
  name: "Checkout",
  component: Checkout,
  meta: {
    requiredLogin:true
  }
  },
  {
    path:"/success",
    name: "Success",
    component: Success
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'LogIn', query: { to: to.path } });
  } else {
    next()
  }
})

export default router
