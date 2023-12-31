//【项目注册文件】
import {mainConfig} from '@/config/main.config'
import {getProjectRoute} from '@/apps/_appRegister/utils/getRoute'
import {appList, buildList} from './appList'


// 基本配置
const baseConfig: ProjectBaseConfigType = {
  configVersion: '1.0',       // 项目配置版本号，用于判断配置是否需要更新

  name: 'AppMaker',           // 项目英文名称
  title: '应用开发平台',        // 项目中文名称
  description: '用于快速开发微应用的脚手架，基于 Vue3 + Vite4 + Ts + Tailwindcss + Element-plus 构建',
  version: '0.0.1',           // 项目版本号
  logoUrl: './assets/logo.svg',  // 项目 Logo 的路径
}


// 样式配置
const styleConfig: ProjectStyleConfigType = {
  ui: 'quasar',               // 项目 UI 库，element | quasar
  theme: 'system',            // 项目默认明/暗主题，dark | light | system

  headerHeight: 48,           // 项目标题栏的高度
  menuWidth: 200,             // 项目菜单栏的宽度，0 为不需要菜单栏
  appMinWidth: 1080,          // 项目中 App 的最小宽度
}


// 环境配置
const envConfig: EnvConfigType = {
  development: {  // 开发环境
    apiBaseUrl: 'http://localhost:8001',  // 当前环境的Api地址
    apiMockUrl: '/mock/',   // 当前环境的模拟数据地址
  },
  production: {  // 生产环境（开发的应用构建后在线运行）
    apiBaseUrl: '/',
    apiMockUrl: '/qdemo/qdemo/mock/',
  },
}


// 路由配置，只需配置项目布局组件路由，模块、应用路由均由 _appRegister.ts 自动生成
const route = getProjectRoute(baseConfig, () => import('./layout/AppMakerLayout.vue'))


// 合成项目配置（不用更改）
baseConfig.logo = new URL(baseConfig.logoUrl, import.meta.url).href  // 生成 Logo 路径

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
