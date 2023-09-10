//【项目注册文件】
import type {RouteRecordRaw} from 'vue-router'
import {mainConfig} from '@/config/main.config'
import logoUrl from './assets/logo.png'  // 需要手动引入 Logo 图片
import {appList, buildList} from './appList'

// 基本配置
const baseConfig: ProjectBaseConfigType = {
  configVersion: '1.0',         // 项目配置版本号，用于判断配置是否需要更新
  name: 'NDQS',                 // 项目英文名称
  title: '数字质量系统',           // 项目中文名称
  description: '新的数字质量系统',  // 项目描述
  version: '0.0.1',             // 项目版本号
  logo: logoUrl,                // 项目 Logo 的路径
}


// 样式配置
const styleConfig: ProjectStyleConfigType = {
  ui: 'element',              // 项目 UI 库，element | quasar
  theme: 'light',             // 项目默认明/暗主题，dark | light | system

  headerHeight: 50,           // 项目标题栏的高度
  menuWidth: 220,             // 项目菜单栏的宽度，0 为不需要菜单栏
  appMinWidth: 1200,          // 项目中 App 的最小宽度
}


// 环境配置
const envConfig: EnvConfigType = {
  development: {  // 开发环境
    apiBaseUrl: 'http://localhost:8001',  // 当前环境的Api地址
    apiMockUrl: '/mock/22',   // 当前环境的模拟数据地址
  },
  production: {  // 生产环境（开发的应用构建后在线运行）
    apiBaseUrl: '/',
    apiMockUrl: '/qdemo/qdemo/mock/22',
  },
}


// 路由配置，只需配置一级项目路由，二级模块路由、三级应用路由均由 _appRegister.ts 自动生成
const route: RouteRecordRaw = {
  path: '/',
  name: 'home',
  meta: {title: baseConfig.title},
  component: () => import('./layout/NdqsLayout.vue'),  // 项目布局组件，可自由定义
  children: [],  // 各 modules 和 app 的路由，由 _appRegister.ts 自动生成
}


// 合成项目配置（不用更改）
const project: ProjectConfigType = {
  ...baseConfig,                 // 基本配置
  style: styleConfig,            // 样式配置

  env: mainConfig.env,           // 当前环境
  ...envConfig[mainConfig.env],  // 当前环境的配置

  route,                         // 路由配置
  appList,                       // 模块和应用列表
  buildList,                     // 构建应用列表
}


export default project
