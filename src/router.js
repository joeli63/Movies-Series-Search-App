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
      name: 'single_movie',
      path: '/movie/:id',
      component: () => import('./views/SingleMovie.vue'),
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: () => import('./views/Favorites.vue'),
    }
  ]
})
