import {createRouter, createWebHashHistory} from 'vue-router'
import {routes} from './routes'
import {storeToRefs} from 'pinia'
import {useMainStore} from '@/stores/mainStore'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({left: 0, top: 0}),
  routes,
})


// 后置路由守卫：设置网页标题
router.afterEach((to) => {
  // 从 mainStore 中获取当前项目配置
  const {currentProject} = storeToRefs(useMainStore())

  document.title = currentProject.value?.name ?? ''

  for (let i = to.matched.length - 1; i >= 0; i--) {
    if (to.matched[i].meta.title) {
      document.title = currentProject.value?.name + ' - ' + to.matched[i].meta.title
      break
    }
  }
})


export default router
