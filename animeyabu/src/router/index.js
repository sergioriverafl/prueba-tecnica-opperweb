import { createRouter, createWebHistory } from 'vue-router'

import Loguin from '../views/Loguin/Loguin.vue'
import AppHome from '../views/AppHome.vue'
import Home from '../views/Home/Home.vue'

import CategoriesList from '../views/Categories/CategoriesList.vue'
import CategoriesCreate from '../views/Categories/CategoriesCreate.vue'
import CategoriesUpdate from '../views/Categories/CategoriesUpdate.vue'




const routes = [
  { path: '/', component: Loguin },
  { path: '/loguin', name: 'Loguin', component: Loguin },

  { path: '/app/', name: 'AppHome', component: AppHome,
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
