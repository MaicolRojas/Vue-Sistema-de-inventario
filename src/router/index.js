import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Inicio from '../components/Inicio.vue'
const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
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
    path: '/categorias',
    name: 'Categorias',

    component: () => import(/* webpackChunkName: "about" */ '../components/Categorias.vue')
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue')
  }

]



const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
