//【主配置文件】

// 根据环境配置Api地址
let env = import.meta.env.MODE

const EnvConfig: any = {
  development: {
    baseUrl: 'http://localhost:8001',
    mockUrl: '/mock/',
  },
  prod: {
    baseUrl: '/',
    mockUrl: '/qdemo/qdemo/mock/',
  }
}


// 平台配置
type ConfigType = {
  env: string,      // 当前环境：development | prod
  baseUrl: string,  // 当前环境的Api地址
  mockUrl: string,  // 当前环境的模拟数据地址
  title: string,    // 平台中文名称
  eTitle: string,   // 平台英文名称
  version: string,  // 平台版本号
}

const config: ConfigType = {
  isShowHeader: true,   // 是否显示标题行，输出 App 时应设置为 false

  env,                  // 当前环境
  ...EnvConfig[env],    // 当前环境的Api地址

  title: '应用展示系统',   // 平台中文名称
  eTitle: 'Apps',       // 平台英文名称
  version: '0.0.1',     // 平台版本号
}


export {config}
