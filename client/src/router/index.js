import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Episodes from '../views/Episodes.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/episode/:seasons',
      name: 'episode',
      component: Episodes
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})

export default router
