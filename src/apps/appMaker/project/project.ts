//【项目注册文件】
import type {RouteRecordRaw} from 'vue-router'
import {mainConfig} from '@/config/main.config'
import logoUrl from './assets/logo.svg'  // 引入 Logo 图片

// 基本配置
const baseConfig: ProjectBaseConfigType = {
  name: 'AppMaker',         // 项目英文名称
  title: '应用开发平台',      // 项目中文名称
  description: '用于快速开发微应用的脚手架，基于 Vue3 + Vite4 + Ts + Tailwindcss + Element-plus 构建',
  version: '0.0.1',         // 项目版本号
  logo: logoUrl,            // 项目 Logo 的路径

  headerHeight: 48,         // 项目标题栏的高度
  headerColor: '#ffffff',   // 项目标题栏的背景色
  headerColor2: '#ffffff',  // 项目标题栏的背景色2，用于显示渐变
  menuWidth: 300,           // 项目菜单栏的宽度，0 为不需要菜单栏
  appMinWidth: 1080,        // 项目中 App 的最小宽度
}


// 环境配置
const envConfig: EnvConfigType = {
  development: {  // 开发环境
    isShowLayout: true,  // 是否显示项目标题栏、菜单栏等布局组件
    apiBaseUrl: 'http://localhost:8001',  // 当前环境的Api地址
    apiMockUrl: '/mock/',   // 当前环境的模拟数据地址
  },
  production: {  // 生产环境（开发的应用构建后在线运行）
    isShowLayout: true,
    apiBaseUrl: '/',
    apiMockUrl: '/qdemo/qdemo/mock/',
  },
  preview: {  // 应用预览环境（在开发平台中预览应用）
    isShowLayout: true,
    apiBaseUrl: '/',
    apiMockUrl: '/qdemo/qdemo/mock/',
  }
}


// 路由配置，只需配置一级项目路由，二级模块路由、三级应用路由均由 appRegister.ts 自动生成
const route: RouteRecordRaw = {
  path: '/',
  component: () => import('@/layouts/MainLayout.vue'),  // 项目布局组件，可自由定义
  meta: {title: baseConfig.title},
  children: [],  // 各 modules 和 app 的路由，由 appRegister.ts 自动生成
}


// 合成项目配置
const project: ProjectConfigType = {
  ...baseConfig,                 // 基本配置
  env: mainConfig.env,           // 当前环境
  ...envConfig[mainConfig.env],  // 当前环境的配置
  previewEnv: envConfig.preview, // 预览环境的配置（用于在开发平台中预览应用）
  route,                         // 路由配置
}


export default project
