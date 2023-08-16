//【TS 类型文件】/【配置类型】
export {}
declare global {
  // 环境配置项类型
  interface EnvConfigItemType {
    isShowLayout: boolean,  // 是否显示项目标题栏、菜单栏等布局组件
    apiBaseUrl: string,     // 当前环境的Api地址
    apiMockUrl: string,     // 当前环境的模拟数据地址
  }

  // 环境配置类型
  interface EnvConfigType {
    [key: string]: EnvConfigItemType
  }

  // 项目配置类型，继承环境配置类型
  interface ProjectConfigType extends EnvConfigItemType {
    env: string,            // 当前环境：development 开发环境 | production 生产环境 | app 应用预览环境

    name: string,           // 项目中文名称
    title: string,          // 项目英文名称
    description: string,    // 项目描述
    version: string,        // 项目版本号
    logo: string,           // 项目 Logo 的路径

    headerHeight: number,   // 项目标题栏的高度
    headerColor: string,    // 项目标题栏的背景色
    headerColor2: string,   // 项目标题栏的背景色2，用于显示渐变
    appMinWidth: number,    // 项目中 App 的最小宽度
  }
}
