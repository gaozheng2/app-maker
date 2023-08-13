//【平台路由表】
import type {RouteRecordRaw} from 'vue-router'
import {config} from '@/config/main.config'
// import {appRoutes} from "@/apps/appStore/appRegister";

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    meta: {title: config.title, isWhiteList: true},
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
