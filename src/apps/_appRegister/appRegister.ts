/**
 * 项目、模块、应用搜索注册程序
 * @description 从 apps 目录中读取所有 project.js、module.ts、app.ts，并注册到平台中
 * @author gaoz
 * @date 2023/9/6
 */
import type {RouteRecordRaw} from 'vue-router'
import {mainConfig} from '@/config/main.config'
import {loadApps} from './utils/loadApps'
import {loadProject} from './utils/loadProjects'
import {filterAppList} from './utils/filterApplist'
import {getProjectRoute, getRoute} from './utils/getRoute'


const appRegister = () => {

// region 1.加载当前项目 currentProject
  // 1.1 根据当前环境加载当前项目名称
  let currentProjectName

  // 对于生产环境，使用配置文件中的 buildProjectName
  if (mainConfig.env === 'production') {
    currentProjectName = mainConfig.buildProjectName
  }
  // 对于开发环境
  else {
    // 首先从 session 中获取当前项目名称，用于预览
    if (sessionStorage.getItem('currentProjectName')) {
      currentProjectName = sessionStorage.getItem('currentProjectName') as string
    }
    // session 中没有，则使用配置文件中的 currentProjectName
    else {
      currentProjectName = mainConfig.currentProjectName
    }
  }


  // 1.2 根据当前项目名称，获取当前项目的配置
  const currentProject = loadProject(currentProjectName)

  // 将当前项目的配置保存到平台配置中
  mainConfig.currentProject = currentProject

  // 更换网页图标
  if (currentProject?.logo) {
    document.querySelector('link[rel="icon"]')?.setAttribute('href', currentProject.logo)
  }
// endregion


// 2.加载当前项目的应用 apps
  const apps = loadApps(currentProjectName)


// region 3 将当前项目的所有模块和应用注册到路由 route 中
  // 3.1 获取当前项目的路由，没有设置则使用默认路由
  const route: RouteRecordRaw = currentProject.route
    || getProjectRoute(currentProject, () => import('@/layouts/MainLayout.vue'))

  route.children = []  // 清空子路由


  // 3.2 处理当前项目的 appList，如果处于生产环境，则过滤应用列表
  if (mainConfig.env === 'production') {
    currentProject!.appList = filterAppList(currentProject?.appList || [], currentProject?.buildList || {}, false)
  }


  // 3.3 设置第一个应用为平台默认路由
  route.redirect = {name: currentProject.appList[0]?.name}


  // 3.4 注册模块和应用路由
  currentProject?.appList?.forEach((item: AppListItemType) => {

    //（1）注册模块和子应用路由
    if (item.type === 'module') {
      // 如果模块下没有子应用，则将模块设置为空白页面
      if (!item.children || item.children?.length === 0) {
        route?.children?.push(getRoute(item, true))
      }

      // 如果模块下有子应用，则将模块设置为路由页面，并添加子应用路由
      else {
        const moduleRoute: RouteRecordRaw = getRoute(item, false)

        // 注册模块下的子应用
        item?.children?.forEach((child: AppListItemType) => {
          if (child.type !== 'app') return

          const childApp = apps.find((app: AppType) => app.name === child.name)
          if (childApp && childApp.route) {
            moduleRoute.children?.push(childApp.route)
          }
          // 如果 appList 中配置了，但是 apps 中没有找到，则将应用设置为空白页面
          else {
            moduleRoute.children?.push(getRoute(child, true))
          }
        })

        // 将模块路由添加到当前项目路由中
        route?.children?.push(moduleRoute)
      }

    }

    //（2）注册一级应用路由
    else if (item.type === 'app') {
      const topApp = apps.find((app: AppType) => app.name === item.name)
      if (topApp && topApp.route) {
        topApp.route.meta = {
          ...topApp.route.meta,
          noMenu: true,  // 标识为一级应用，无菜单栏
        }
        route?.children?.push(topApp.route)
      }
      // 如果 appList 中配置了，但是 apps 中没有找到，则添加空白页路由
      else {
        route?.children?.push(getRoute(item, true, true))
      }
    }
  })
// endregion

  console.log('route', route)

  return {apps, route}
}


export {appRegister}
