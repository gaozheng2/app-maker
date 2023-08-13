//【主配置文件】

// 环境配置
let env = import.meta.env.MODE

const EnvConfig: EnvConfigType = {
  development: {  // 开发环境
    isShowHeader: true,  // 是否显示平台标题行，调试 App 时为 true
    baseUrl: 'http://localhost:8001',  // 当前环境的Api地址
    mockUrl: '/mock/',   // 当前环境的模拟数据地址
  },
  production: {  // 生产环境
    isShowHeader: false,  // 是否显示平台标题行，构建 App 时为 false
    baseUrl: '/',
    mockUrl: '/qdemo/qdemo/mock/',
  }
}


// 平台配置
const config: SystemConfigType = {
  env,                  // 当前环境
  ...EnvConfig[env],    // 当前环境的配置

  title: '应用开发平台',   // 平台中文名称
  eTitle: 'AppMaker',   // 平台英文名称
  version: '0.0.1',     // 平台版本号
}


export {config}
