import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login/Login.vue'
import Register from '../views/Register/Register.vue'


import AppHome from '../views/AppHome.vue'
import Home from '../views/Home/Home.vue'

import CategoriesList from '../views/Categories/CategoriesList.vue'
import CategoriesCreate from '../views/Categories/CategoriesCreate.vue'
import CategoriesUpdate from '../views/Categories/CategoriesUpdate.vue'




const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/registro', name: 'Register', component: Register },

  

  { path: '/app/', name: 'AppHome', component: AppHome,
    redirect: '/app/inicio',
    children: [
      { path: 'inicio', name: 'Home', component: Home },
      { path: 'lista-categorias', name: 'CategoriesList', component: CategoriesList },
      { path: 'crear-categoria', name: 'CategoriesCreate', component: CategoriesCreate },
      { path: 'actualizar-categoria', name: 'CategoriesUpdate', component: CategoriesUpdate },    
    ]  
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
