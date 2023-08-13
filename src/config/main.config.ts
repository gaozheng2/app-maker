//【主配置文件】

// 环境配置
let env = import.meta.env.MODE
// env = 'app'  // 手动设置环境，用于调试

const envConfig: EnvConfigType = {
  // 开发环境
  development: {
    isShowLayout: true,  // 是否显示平台标题栏、菜单栏等布局组件
    apiBaseUrl: 'http://localhost:8001',  // 当前环境的Api地址
    apiMockUrl: '/mock/',   // 当前环境的模拟数据地址
  },
  // 生产环境（平台在线运行）
  production: {
    isShowLayout: true,
    apiBaseUrl: '/',
    apiMockUrl: '/qdemo/qdemo/mock/',
  },
  // 应用运行环境（打包后的 App）
  app: {
    isShowLayout: false,
    apiBaseUrl: '/',
    apiMockUrl: '/qdemo/qdemo/mock/',
  }
}


// 平台配置
const config: SystemConfigType = {
  env,                  // 当前环境
  ...envConfig[env],    // 当前环境的配置

  title: '应用开发平台',   // 平台中文名称
  eTitle: 'AppMaker',   // 平台英文名称
  version: '0.0.1',     // 平台版本号

  headerHeight: 48,     // 平台标题栏高度
  appMinWidth: 1080,    // App 最小宽度
}


export {config}
