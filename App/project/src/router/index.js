import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import VueScroller from 'vue-scroller'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(VueResource);
Vue.use(VueScroller);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
