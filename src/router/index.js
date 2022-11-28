import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../views/IndexPage'
const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage
  },
  {
    path: '/test',
    name: 'TestPage',
    component: () => import("../views/TestPage")
  },
  {
    path: '/result',
    name: 'ResultPage',
    component: () => import("../views/ResultPage")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
