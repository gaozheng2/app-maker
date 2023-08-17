//【项目注册文件】
import {mainConfig} from '@/config/main.config'
import logoUrl from './assets/logo.png'  // 引入 Logo 图片

// 环境配置
const envConfig: EnvConfigType = {
  development: {  // 开发环境
    isShowLayout: true,  // 是否显示项目标题栏、菜单栏等布局组件
    apiBaseUrl: 'http://localhost:8001',  // 当前环境的Api地址
    apiMockUrl: '/mock/',   // 当前环境的模拟数据地址
  },
  production: {  // 生产环境（开发的项目构建后在线运行）
    isShowLayout: false,  // 不显示项目布局组件，可用于构建微应用
    apiBaseUrl: '/',
    apiMockUrl: '/qdemo/qdemo/mock/',
  },
  preview: {  // 应用预览环境（在开发平台中预览应用）
    isShowLayout: true,  // 显示项目布局组件，可用于完整预览应用
    apiBaseUrl: '/',
    apiMockUrl: '/qdemo/qdemo/mock/',
  }
}


// 项目配置
const project: ProjectConfigType = {
  env: mainConfig.env,           // 当前环境
  ...envConfig[mainConfig.env],  // 当前环境的配置
  previewEnv: envConfig.preview, // 预览环境的配置（用于在开发平台中预览应用）

  name: 'NDQS',                 // 项目英文名称
  title: '数字质量系统',          // 项目中文名称
  description: '新的数字质量系统',  // 项目描述
  version: '0.0.1',             // 项目版本号
  logo: logoUrl,                // 项目 Logo 的路径

  headerHeight: 60,             // 项目标题栏的高度
  headerColor: '#ffffff',       // 项目标题栏的背景色
  headerColor2: '#ffffff',      // 项目标题栏的背景色2，用于显示渐变
  menuWidth: 300,               // 项目菜单栏的宽度
  appMinWidth: 1080,            // 项目中 App 的最小宽度
}


export default project
