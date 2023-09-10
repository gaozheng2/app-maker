//【应用注册文件】
import {getAppRoute} from '@/apps/_appRegister/utils/getRoute'

// App 基本配置，可覆盖项目的 appList 中的配置
const config: AppType = {
  type: 'app',      // 类型：固定为 app 应用
  name: 'desktop',  // 应用名称（英文），唯一标识，用于与 appList 中的项目对应
  title: '工作台',   // 应用标题（中文）
  version: '0.1',   // 应用版本
}


// App 路由配置
const route = getAppRoute(config, () => import('./pages/Desktop.vue'))


// 组装 App 配置，用于 appRegister 读取后自动注册
const app: AppType = {
  ...config, // App 配置
  route,  // App 路由
}

export default app
