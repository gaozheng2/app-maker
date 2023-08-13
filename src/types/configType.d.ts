//【TS 类型文件】/【配置类型】
export {}
declare global {
  // 环境配置项类型
  interface EnvConfigItemType {
    isShowHeader: boolean,  // 是否显示平台标题行，开发环境调试 App 时为 true，生产环境构建 App 时为 false
    baseUrl: string,        // 当前环境的Api地址
    mockUrl: string,        // 当前环境的模拟数据地址
  }

  // 环境配置类型
  interface EnvConfigType {
    [key: string]: EnvConfigItemType
  }

  // 平台配置类型
  interface SystemConfigType extends EnvConfigItemType {
    env: string,      // 当前环境：development | production
    title: string,    // 平台中文名称
    eTitle: string,   // 平台英文名称
    version: string,  // 平台版本号
  }
}
