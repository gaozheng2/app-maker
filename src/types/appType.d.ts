//【TS 类型文件】/【App 类型】
import type {RouteRecordRaw} from 'vue-router'
import type {BaseApi} from '@/api/BaseApi'

export {}
declare global {

  // App 基本配置类型
  interface AppConfigType {
    name: string        // App 名称（英文），唯一标识，不可重复
    title: string       // App 标题（中文）
    // shortTitle?: string // App 短标题（用于标题栏显示）
    version: string,    // App 版本

    icon?: string,      // App 图标
    onlyIcon?: boolean, // 是否只显示图标（只适用于一级菜单）
    // color?: string,     // App 图标颜色
    // bgColor?: string,   // App 图标背景色
    // pageStyle?: 'plaid'   // 页面背景风格：plaid（网格）

    // type: 'app',        // App 类型：app（应用）、module（模块）
    // module?: string,    // App 模块（属于哪个分类），空为属于平台
    // order: number,      // App 排序
    blank?: boolean,    // 是否在新页面打开链接
  }


  // App 配置类型，包含基本配置和路由配置，用于 appRegister 读取后自动注册
  interface AppType extends AppConfig {
    route: RouteRecordRaw  // App 路由
  }


  // Common App 数据类型，用于构建通用 App
  interface CommonAppDataType extends AppConfig {
    api: BaseApi<any>  // 后端数据接口
    columns: ColumnType[]  // 表格列参数
    // formItems: FormItemType[] // 表单项参数

    isRequest?: boolean  // 表格分页、排序、筛选参数变化时，是否自行请求数据
    rowsOptions?: number[],  // 表格每页行数选项
    defaultSort?: {  // 表格默认排序参数
      sortBy: string,
      desc: boolean
    }

    noCreateBtn?: boolean  // 是否不显示创建按钮
    creatBtnText?: string  // 创建按钮文字
    noSearchText?: boolean  // 是否不显示搜索框
    noAdvancedSearch?: boolean  // 是否不显示高级查询
    noChartBtn?: boolean  // 是否不显示图表按钮
  }


  // Module 模块类型
  interface ModuleType {
    name: string        // 模块名称（英文）
    title: string       // 模块标题（中文）
    shortTitle?: string // 模块短标题（用于标题栏显示）

    icon?: string,      // 模块图标
    onlyIcon?: boolean, // 是否只显示图标（只适用于一级菜单）
    color?: string,     // App 图标颜色
    bgColor?: string,   // App 图标背景色

    type: 'module',     // 模块类型：app（应用）、module（模块）
    order: number,      // 模块排序
    blank?: boolean,    // 是否在新页面打开链接

    noMenu?: boolean,   // 是否不显示菜单栏
    miniMenu?: boolean, // 是否菜单栏始终处于折叠状态

    children?: AppType[]// 模块下的 App
  }
}
