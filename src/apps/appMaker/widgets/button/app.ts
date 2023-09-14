//【应用注册文件】
import {getAppRoute} from '@/apps/_appRegister/utils/getRoute'


// App 基本配置
const config: AppType = {
  type: 'app',
  name: 'button',
  title: '按钮组件',
  version: '0.1',
  icon: 'smart_button',
}


// App 路由配置
const route = getAppRoute(config, () => import('./pages/Button.vue'))


// 组装 App 配置，用于 appRegister 读取后自动注册
const app: AppType = {
  ...config, // App 配置
  route,  // App 路由
}

export default app
