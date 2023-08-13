//【TS 类型文件】/【路由类型】
import 'vue-router'  // 由 vue-router 自动引入

declare module 'vue-router' {
  // 路由元信息类型
  interface RouteMeta {
    title?: string // 页面标题
    module?: string // 当前模块
    isWhiteList?: boolean // 是否白名单
  }
}
