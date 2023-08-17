//【TS 类型文件】/【配置类型】
export {}
declare global {
  // 平台配置类型
  interface MainConfigType {
    env: string,  // 当前环境：development 开发环境 / production 生产环境 / app 应用预览环境
    currentProjectName: string,  // 当前项目名称
    currentProject?: ProjectConfigType,  // 当前项目的配置，无需指定，系统运行时自动读取
    buildProjectName: string,  // 构建的项目名称，使用 npm 的 build-app 指令构建应用项目时使用
  }


  /**
   * 项目配置相关类型
   */
  // 项目基础配置类型
  interface ProjectBaseConfigType {
    name: string,             // 项目中文名称
    title: string,            // 项目英文名称
    description: string,      // 项目描述
    version: string,          // 项目版本号
    logo: string,             // 项目 Logo 的路径
  }

  // 项目样式配置类型
  interface ProjectSytleConfigType {
    ui:'element' | 'quasar',  // 项目 UI 库，element | quasar
    theme: string,            // 项目主题，dark | light

    headerHeight: number,     // 项目标题栏的高度
    menuWidth: number,        // 项目菜单栏的宽度
    appMinWidth: number,      // 项目中 App 的最小宽度

    primaryColor: string,     // 项目主色，用于主题色、按钮等
    headerTextColor?: string, // 项目标题栏的文字颜色
    headerBgColor: string,    // 项目标题栏的背景色，不可省略
    headerBgColor2?: string,  // 项目标题栏的背景色2，用于显示渐变，省略则不显示渐变
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

  // 应用列表项类型
  interface AppListItemType {
    name: string,   // 应用名称
    type?: 'app',   // 应用类型：app 应用，用于标识独立于模块之外的应用
    entry?:boolean, // 是否为项目/模块的入口应用，每个模块只能有一个入口应用，项目只能有一个入口应用/模块
    ref?: string,   // 应用引用路径，可以引用应用库和其他项目中的成熟应用
  }

  // 模块列表项类型
  interface ModuleListItemType{
    name: string,   // 模块名称
    entry?:boolean, // 是否为项目的入口模块，项目只能有一个入口模块/应用
    ref?: string,   // 模块引用路径，可以引用应用库和其他项目中的成熟应用
    apps?: AppListItemType[],  // 子应用列表
  }

  // 项目配置类型，继承项目基础配置、环境配置类型
  interface ProjectConfigType extends ProjectBaseConfigType, EnvConfigItemType {
    env: string,            // 当前环境：development 开发环境 | production 生产环境 | preview 应用预览环境
    previewEnv: EnvConfigItemType,  // 预览环境的配置
    route: RouteRecordRaw,  // 路由配置
    modules?: (ModuleListItemType | AppListItemType)[],  // 模块和应用列表
  }
}
