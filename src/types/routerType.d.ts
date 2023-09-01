//【TS 类型文件】/【路由类型】
import 'vue-router'  // 由 vue-router 自动引入

declare module 'vue-router' {
  // 路由元信息类型
  interface RouteMeta {
    title?: string    // 页面标题
    noMenu?: boolean  // 是否不显示菜单栏
    module?: string   // 当前模块
    isWhiteList?: boolean // 是否为白名单页面，无需登录即可访问
  }
}
