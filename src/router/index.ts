import {createRouter, createWebHashHistory} from 'vue-router'
import {mainConfig} from '@/config/main.config'
import {appRegister} from '@/apps/_appRegister/appRegister'


// 读取当前项目的路由，并注册到平台路由中
const {route} = appRegister()


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({left: 0, top: 0}),
  routes: [
    route,  // 当前项目路由
    {
      path: '/preview',
      name: 'preview',
      meta: {title: '项目预览'},
      component: () => import('@/layouts/PreviewLayout.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      name: '404',
      meta: {title: '404', whiteList: true},
      component: () => import('@/layouts/ErrorLayout.vue')
    },
  ]
})


// 如果处于非 AppMaker 的生产环境，删除项目预览路由
if (mainConfig.env === 'production' && mainConfig.currentProjectName !== 'appMaker') {
  router.removeRoute('preview')
}


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
