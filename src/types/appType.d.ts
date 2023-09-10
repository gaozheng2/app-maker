//【TS 类型文件】/【App 类型】
import type {RouteRecordRaw} from 'vue-router'
import type {BaseApi} from '@/api/BaseApi'

export {}
declare global {

  // App 数据类型，包含基本配置和路由配置，用于 appRegister 读取后自动注册
  // interface AppDataType extends AppType {
  //   route: RouteRecordRaw  // App 路由
  // }


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
}
