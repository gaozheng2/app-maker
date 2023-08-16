//【项目注册文件】
import logoUrl from './assets/logo.png'  // 引入 Logo 图片

// 环境配置
let env = import.meta.env.MODE
// env = 'app'  // 手动设置环境，用于调试

const envConfig: EnvConfigType = {
  // 开发环境
  development: {
    isShowLayout: true,  // 是否显示项目标题栏、菜单栏等布局组件
    apiBaseUrl: 'http://localhost:8001',  // 当前环境的Api地址
    apiMockUrl: '/mock/',   // 当前环境的模拟数据地址
  },
  // 生产环境（项目打包后在线运行）
  production: {
    isShowLayout: true,
    apiBaseUrl: '/',
    apiMockUrl: '/qdemo/qdemo/mock/',
  },
  // 应用预览环境
  app: {
    isShowLayout: false,
    apiBaseUrl: '/',
    apiMockUrl: '/qdemo/qdemo/mock/',
  }
}


// 项目配置
const project: ProjectConfigType = {
  env,                  // 当前环境
  ...envConfig[env],    // 当前环境的配置

  name: 'NDQS',         // 项目英文名称
  title: '数字质量系统',  // 项目中文名称
  description: '用于快速开发微应用的脚手架，基于 Vue3 + Vite4 + Ts + Tailwindcss + Element-plus 构建',
  version: '0.0.1',     // 项目版本号
  logo: logoUrl,        // 项目 Logo 的路径

  headerHeight: 60,     // 项目标题栏的高度
  headerColor: '#ffffff', // 项目标题栏的背景色
  headerColor2: '#ffffff', // 项目标题栏的背景色2，用于显示渐变
  appMinWidth: 1080,    // 项目中 App 的最小宽度
}


export default project
