//【平台路由表】
import type {RouteRecordRaw} from 'vue-router'
// import {appRoutes} from "@/apps/appStore/appRegister";

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    // TODO: 系统标题和路由应从配置文件中读取
    meta: {title: '应用开发平台', isWhiteList: true},
    children: [
      // ...appRoutes,  // 各 App 注册的路由
    ],
  },
  {
    path: '/:catchAll(.*)*',
    name: '404',
    meta: {title: '404', isWhiteList: true},
    component: () => import('@/layouts/ErrorLayout.vue')
  },
]
