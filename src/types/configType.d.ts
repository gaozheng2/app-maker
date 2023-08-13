//【TS 类型文件】/【配置类型】
export {}
declare global {
  // 环境配置项类型
  interface EnvConfigItemType {
    isShowLayout: boolean,  // 是否显示平台标题栏、菜单栏等布局组件
    apiBaseUrl: string,     // 当前环境的Api地址
    apiMockUrl: string,     // 当前环境的模拟数据地址
  }

  // 环境配置类型
  interface EnvConfigType {
    [key: string]: EnvConfigItemType
  }

  // 平台配置类型
  interface SystemConfigType extends EnvConfigItemType {
    env: string,      // 当前环境：development 开发环境 | production 生产环境 | app 应用运行环境

    title: string,    // 平台中文名称
    eTitle: string,   // 平台英文名称
    version: string,  // 平台版本号

    headerHeight: number,  // 平台标题栏高度
    appMinWidth: number,   // App 最小宽度
  }
}
