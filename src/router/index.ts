import {createRouter, createWebHashHistory} from 'vue-router'
import {mainConfig} from '@/config/main.config'
import {route} from '@/apps/_appRegister/appRegister'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({left: 0, top: 0}),
  routes: [
    route,
    {
      path: '/:catchAll(.*)*',
      name: '404',
      meta: {title: '404', whiteList: true},
      component: () => import('@/layouts/ErrorLayout.vue')
    },
  ]
})


// 后置路由守卫：设置网页标题
// 规则为：项目英文名称 + 当前路由的 meta.title（应用中文名称）
router.afterEach((to) => {
  const {currentProject} = mainConfig
  document.title = currentProject?.title ?? ''

  for (let i = to.matched.length - 1; i >= 0; i--) {
    if (to.matched[i].meta.title) {
      document.title = currentProject?.title + ' - ' + to.matched[i].meta.title
      break
    }
  }
})


export default router
