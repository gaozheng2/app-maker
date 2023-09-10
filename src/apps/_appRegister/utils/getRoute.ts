// 【应用注册程序】/【工具】/【设置路由】
import type {RouteRecordRaw} from 'vue-router'

/**
 * 为模块和空应用设置路由
 * @param item 模块或应用
 * @param isEmpty 是否为空白页面
 * @param isTopApp 是否为一级应用
 * @returns route 路由对象
 */
const getRoute = (item: ModuleType | AppType, isEmpty: boolean, isTopApp = false): RouteRecordRaw => {
  const route: RouteRecordRaw = {
    path: item.name,
    name: item.name,
    component: () => import('@/components/page/EmptyPage.vue'),
    redirect: '',
    children: [],
  }

  // 设置模块路由
  if (item.type === 'module') {
    route.meta = {type: 'module', title: item.title, noMenu: item.noMenu, miniMenu: item.miniMenu}

    // 设置非空模块路由
    if (!isEmpty) {
      // 设置第一个子应用为模块的默认路由，如果第一个是应用组，则设置后面的第一个应用为默认路由
      let redirectName = ''
      for (let i = 0; i < (item.children?.length ?? 0); i++) {
        if (item.children?.[i].type === 'app') {
          redirectName = item.children[i].name
          break
        }
      }

      route.redirect = {name: redirectName}
      route.component = () => import('@/components/page/RouterPage.vue')
    }
  }

  // 设置空的应用路由
  else if (item.type === 'app') {
    route.meta = {type: 'app', title: item.title, noMenu: isTopApp}
  }

  return route
}


/**
 * 为项目设置路由
 * @param project 项目基本配置，使用项目标题
 * @param component  项目布局组件，可自由定义项目入口组件
 * @returns route 路由对象
 */
const getProjectRoute = (project: ProjectBaseConfigType, component: () => Promise<{}>): RouteRecordRaw => {
  return {
    path: '/',
    name: 'home',
    meta: {type: 'project', title: project.title},
    component: component,  // 项目布局组件，可自由定义项目入口组件
    children: [],  // 各 modules 和 app 的路由，由 _appRegister.ts 自动生成
  }
}


/**
 * 为应用设置路由
 * @param app  应用基本配置，使用应用名称和标题
 * @param component  应用入口组件
 * @returns route 路由对象
 */
const getAppRoute = (app: AppType, component: () => Promise<{}>): RouteRecordRaw => {
  return {
    path: app.name,
    name: app.name,
    meta: {type: 'app', title: app.title},
    component: component,
  }
}


export {getRoute, getProjectRoute, getAppRoute}
