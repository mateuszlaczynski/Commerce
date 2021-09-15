import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Contact from '../views/Contact.vue'
import Category from '../views/Category.vue'
import CategoryList from '../views/CategoryList.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
