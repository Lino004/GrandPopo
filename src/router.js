import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Index.vue'
import Vitrine from './views/Vitrine.vue'
import App from './views/App.vue'

Vue.use(Router)

const DEFAULT_PAGE = '/vitrine'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: DEFAULT_PAGE
    },
    {
      path: '/vitrine',
      name: 'vitrine',
      component: Vitrine
    },
    {
      path: '/',
      name: 'App',
      component: App,
      redirect: DEFAULT_PAGE,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        }
      ]
    }
  ]
})
