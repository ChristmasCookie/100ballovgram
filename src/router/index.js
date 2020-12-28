import Vue from 'vue'
import VueRouter from 'vue-router'
import Direct from '../views/Direct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/direct',
    name: 'Direct',
    component: Direct
  },
  {
    path: '*',
    component: Direct
  },
]

const router = new VueRouter({
  routes
})

export default router
