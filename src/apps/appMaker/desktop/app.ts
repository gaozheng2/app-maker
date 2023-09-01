//【App 注册文件】
import type {RouteRecordRaw} from 'vue-router'

// App 基本配置
const config: AppType = {
  type: 'app',      // 类型：固定为 app 应用
  name: 'desktop',  // App 名称（英文），唯一标识，用于与 appList 中的项目对应
  title: '工作台',   // App 标题（中文）
  version: '0.1',   // App 版本
}


// App 路由配置
const route: RouteRecordRaw = {
  path: config.name,
  name: config.name,
  meta: {type: 'app', title: config.title},
  component: () => import('./pages/Desktop.vue'),
}


// 组装 App 配置，用于 appRegister 读取后自动注册
const app: AppDataType = {
  ...config, // App 配置
  route,  // App 路由
}

export default app
