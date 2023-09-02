//【TS 类型文件】/【路由类型】
import 'vue-router'  // 由 vue-router 自动引入

declare module 'vue-router' {
  // 路由元信息类型
  interface RouteMeta {
    type?: 'module' | 'app' // 路由类型，模块或应用
    title?: string          // 页面标题
    noMenu?: boolean        // 是否不显示菜单栏
    miniMenu?: boolean      // 是否显示迷你菜单栏
    whiteList?: boolean   // 是否为白名单页面，无需登录即可访问
  }
}
