//【TS 类型文件】/【平台和项目配置类型】
import type {RouteRecordRaw} from 'vue-router'
import type {ThemeType} from '@/utils/style/useTheme'

export {}
declare global {
  // 平台配置类型
  interface MainConfigType {
    // 当前环境：development 开发环境 / production 生产环境 / app 应用预览环境
    env: 'development' | 'production',
    currentProjectName: string,         // 开发环境运行的当前项目名称
    currentProject?: ProjectConfigType, // 当前项目的配置，无需指定，系统运行时自动读取
    buildProjectName: string,           // 构建的项目名称，使用 npm 的 build-app 指令构建应用项目时使用
    buildMode: 'project' | 'app',       // 构建模式：project 项目模式 / app 应用模式
  }


  /**
   * 项目配置相关类型
   */
    // 项目基础配置类型
  interface ProjectBaseConfigType {
    configVersion: string,    // 项目配置版本号，用于判断配置是否需要更新
    name: string,             // 项目中文名称
    title: string,            // 项目英文名称
    description: string,      // 项目描述
    version: string,          // 项目版本号
    logo: string,             // 项目 Logo 的路径
  }

  // 项目样式配置类型
  interface ProjectStyleConfigType {
    ui: 'element' | 'quasar', // 项目 UI 库，element | quasar
    theme: ThemeType,         // 项目默认明/暗主题，dark | light | system

    headerHeight: number,     // 项目标题栏的高度
    menuWidth: number,        // 项目菜单栏的宽度
    appMinWidth: number,      // 项目中 App 的最小宽度
  }

  // 环境配置项类型
  interface EnvConfigItemType {
    apiBaseUrl: string,     // 当前环境的Api地址
    apiMockUrl: string,     // 当前环境的模拟数据地址
  }

  // 环境配置类型
  interface EnvConfigType {
    [key: string]: EnvConfigItemType
  }


  // 应用列表项类型，包括应用、模块、应用组 3 种
  type AppListItemType = AppType | ModuleType | GroupType

  // 应用项类型
  interface AppType {
    type: 'app'         // 类型：module 模块 | app 应用 | group 应用组
    name: string,       // 名称（英文），唯一标识，不可重复
    title: string,      // 标题（中文）
    version?: string,   // 版本

    icon?: string,      // 图标
    iconSize?: string,  // 图标大小，默认 20px
    onlyIcon?: true,    // 在标题栏是否只显示图标（只适用于一级菜单）
    align?: 'left' | 'center' | 'right',  // 在标题行显示的位置

    ref?: string,       // 复用的引用路径，可以引用应用库和其他项目中的成熟应用
  }

  // 应用组类型
  interface GroupType {
    type: 'group'       // 类型：group 应用组
    name: string,       // 名称（英文）, 唯一标识，不可重复
    title: string,      // 标题（中文）
  }

  // 模块项类型
  interface ModuleType {
    type: 'module',
    name: string,       // 名称（英文），唯一标识，不可重复
    title: string,      // 标题（中文）

    icon: string,       // 图标
    iconSize?: string,  // 图标大小，默认 20px
    onlyIcon?: true,    // 在标题栏是否只显示图标（只适用于一级菜单）
    align?: 'left' | 'center' | 'right',  // 在标题行显示的位置

    noMenu?: boolean,   // 是否不显示菜单栏
    miniMenu?: boolean, // 是否菜单栏始终处于折叠状态

    children?: AppListItemType[],  // 子应用列表，包括应用和应用组
  }


  // 构建应用列表类型
  interface BuildListType {
    include?: string[],  // 需要构建的应用列表，为空则构建全部应用
    exclude?: string[],  // 不需要构建的应用列表，为空则构建全部应用
  }


  // 项目配置类型，继承项目基础配置、环境配置类型
  interface ProjectConfigType extends ProjectBaseConfigType, EnvConfigItemType {
    env: string,                    // 当前环境：development 开发环境 | production 生产环境 | preview 应用预览环境
    style: ProjectStyleConfigType,  // 项目样式配置
    route: RouteRecordRaw,          // 路由配置

    appList?: AppListItemType[],    // 模块和应用列表
    moduleList?: ModuleType[],      // 模块列表（将一级应用折叠进模块 home 中）
    buildList?: BuildListType,      // 构建应用列表
  }
}
