import {createRouter, createWebHashHistory} from 'vue-router'
import {routes} from './routes'
import {config} from '@/config/main.config'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({left: 0, top: 0}),
  routes,
})


// 后置路由守卫：设置网页标题
router.afterEach((to) => {
  document.title = config.eTitle

  for (let i = to.matched.length - 1; i >= 0; i--) {
    if (to.matched[i].meta.title) {
      document.title = config.eTitle + ' - ' + to.matched[i].meta.title
      break
    }
  }
})

export default router
