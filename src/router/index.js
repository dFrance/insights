import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewInsight from '../views/NewInsight'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'New',
    component: NewInsight
  }
]

const router = new VueRouter({
  routes
})

export default router
