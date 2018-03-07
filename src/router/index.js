import Vue from 'vue'
import Router from 'vue-router'
import Events from '@/components/Events'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/events',
    name: 'Events',
    component: Events
  }]
})
