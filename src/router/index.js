import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Start.vue')
  },
  {
    path: '/finish',
    component: () => import('@/views/Finish.vue')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component:
]

const router = new VueRouter({
  routes
})

export default router
