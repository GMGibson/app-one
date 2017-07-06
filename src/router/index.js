import Vue from 'vue'
import Router from 'vue-router'
import ShowCase from '@/components/ShowCase.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ShowCase
    }    
  ]
})
