//【TS 类型文件】/【配置类型】
export {}
declare global {
  // 平台配置类型
  interface MainConfigType {
    env: string,  // 当前环境：development 开发环境 / production 生产环境 / app 应用预览环境
    currentProjectName: string,  // 当前项目名称
    currentProject?: ProjectConfigType,  // 当前项目的配置，无需指定，系统运行时自动读取
    buildProjectName: string,  // 构建的项目名称，使用 npm 的 build-app 指令构建应用项目时使用
    buildModuleList: string[],  // 需要构建的 Module 列表，与 buildAppList 均为空时构建所有 Module
    buildAppList: string[],  // 需要构建的 App 列表，与 buildModuleList 均为空时构建所有 App
  }

  // 项目基础配置类型
  interface ProjectBaseConfigType {
    name: string,           // 项目中文名称
    title: string,          // 项目英文名称
    description: string,    // 项目描述
    version: string,        // 项目版本号
    logo: string,           // 项目 Logo 的路径

    headerHeight: number,   // 项目标题栏的高度
    headerColor: string,    // 项目标题栏的背景色
    headerColor2: string,   // 项目标题栏的背景色2，用于显示渐变
    menuWidth: number,      // 项目菜单栏的宽度
    appMinWidth: number,    // 项目中 App 的最小宽度
  }

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

  // 项目配置类型，继承项目基础配置、环境配置类型
  interface ProjectConfigType extends ProjectBaseConfigType, EnvConfigItemType {
    env: string,            // 当前环境：development 开发环境 | production 生产环境 | preview 应用预览环境
    previewEnv: EnvConfigItemType,  // 预览环境的配置
    route: RouteRecordRaw,  // 路由配置
  }
}
