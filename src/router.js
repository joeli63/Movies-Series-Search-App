import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      name: 'details',
      path: '/single/:id',
      component: () => import('./views/Details.vue'),
    },
    {
      name: 'favorites',
      path: '/favorites',
      component: () => import('./views/Favorites.vue'),
    }
  ]
})
