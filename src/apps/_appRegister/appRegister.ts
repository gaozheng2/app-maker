/**
 * 项目、模块、应用搜索注册程序
 * @description 从 apps 目录中读取所有 project.js、module.ts、app.ts，并注册到平台中
 * @author gaoz
 * @date 2023/9/1
 */
import type {RouteRecordRaw} from 'vue-router'
import {mainConfig} from '@/config/main.config'
import {flatAppList} from './utils/flatAppList'
import {filterAppList} from './utils/filterApplist'


// region 1.加载当前项目 currentProject
// 1.1 扫描 apps 目录下的所有 project.ts 文件，获取项目配置集合 projects
// *** 此时会将所有项目的配置都加载到内存中，因此应尽量减少在 project.ts 中静态引入图片或组件等资源
const projectFiles = import.meta.glob(
  '/src/apps/**/project.ts',
  {eager: true, import: 'default'}  // eager: true 表示立即加载，import: 'default' 表示只加载 default 导出
)

const projects: ProjectConfigType[] = []  // 项目配置集合
for (let path in projectFiles) {
  const project = projectFiles[path] as ProjectConfigType
  projects.push(project)
}


// 1.2 根据 main.config 配置，加载对应的项目配置，并保存到平台配置中
// 根据当前环境加载当前项目名称
let currentProjectName = ''
if (mainConfig.env === 'production') {
  currentProjectName = mainConfig.buildProjectName
} else {
  currentProjectName = mainConfig.currentProjectName
}

// 根据当前项目名称，获取当前项目的配置
const currentProject = projects
  .find((item: ProjectConfigType) => item.name === currentProjectName)

// 将当前项目的配置保存到平台配置中
mainConfig.currentProject = currentProject


// 1.3 设置当前项目的样式
const {primaryColor, headerTextColor, headerBgColor, headerBgColor2} = currentProject!.style!

if (primaryColor) {
  document.documentElement.style.setProperty('--color-primary', primaryColor)
}
if (headerTextColor) {
  document.documentElement.style.setProperty('--color-header-text', headerTextColor)
}
if (headerBgColor) {
  document.documentElement.style.setProperty('--color-header-bg', headerBgColor)
}
if (headerBgColor2) {
  document.documentElement.style.setProperty('--color-header-bg2', headerBgColor2)
} else {  // 如果没有设置第二个背景色，则全部使用第一个背景色
  document.documentElement.style.setProperty('--color-header-bg2', headerBgColor)
}
// endregion


// region 2.加载 apps 目录下所有的应用 apps
// 2.1 扫描 apps 目录下的所有 app.ts 文件，获取应用文件集合 appFiles
const appFiles = import.meta.glob(`/src/apps/**/app.ts`,
  {eager: true, import: 'default'})


// 2.2 筛选当前项目的 App，生成应用集合 apps
const apps: AppDataType[] = []

for (let path in appFiles) {
  const app = appFiles[path] as AppDataType
  const project = path.split('/')[3].toLowerCase()  // 从路径中获取项目名称
  if (project !== currentProjectName.toLowerCase()) continue  // 如果项目名称不是当前项目，则跳过
  apps.push(app)
}
// endregion


// region 3 将当前项目的 App 注册到路由中
// 3.1 生成当前项目的路由，提供给 router，没有设置则使用默认路由
const route: RouteRecordRaw = currentProject!.route || {
  path: '/',
  name: currentProject!.name,
  meta: {title: currentProject!.title},
  component: () => import('@/layouts/MainLayout.vue'),
}


// 3.2 处理当前项目的 appList，过滤应用列表，生成当前项目的扁平化应用列表
// 如果处于生产环境，则过滤应用列表
if (mainConfig.env === 'production') {
  currentProject!.appList = filterAppList(currentProject?.appList || [], currentProject?.buildList || {}, false)
}

// 扁平化应用列表
const appList = flatAppList(currentProject?.appList || [])

// 设置第一个应用为平台默认路由
route.redirect = {name: appList[0]?.name}


// 3.3 注册模块和应用
currentProject?.appList?.forEach((item: AppListItemType) => {
  //（1）注册当前项目的模块路由
  // 如果模块下没有子应用，则将模块设置为空白页面
  if (item.type === 'module') {
    if (!item.children || item.children?.length === 0) {
      route?.children?.push({
        path: item.name,
        name: item.name,
        meta: {title: item.title},
        component: () => import('@/components/page/EmptyPage.vue'),
      })
      // 如果模块下有子应用，则将模块设置为路由页面，并添加子应用路由
    } else {
      const moduleRoute: RouteRecordRaw = {
        path: item.name,
        name: item.name,
        meta: {title: item.title},
        component: () => import('@/components/page/RouterPage.vue'),
        // 设置第一个子应用为模块的默认路由，如果第一个是应用组，则
        redirect: {name: item.children?.[0]?.name || item.children?.[1]?.name},
        children: [],
      }

      // 注册模块下的子应用
      item?.children?.forEach((child: AppListItemType) => {
        if (child.type !== 'app') return
        const childApp = apps.find((app: AppType) => app.name === child.name)
        if (childApp && childApp.route) {
          moduleRoute.children.push(childApp.route)
        } else {
          // 如果 appList 中配置了，但是 apps 中没有找到，则将应用设置为空白页面
          moduleRoute.children?.push({
            path: child.name,
            name: child.name,
            meta: {title: child.title},
            component: () => import('@/components/page/EmptyPage.vue'),
          })
        }
      })

      // 将模块路由添加到当前项目路由中
      route?.children?.push(moduleRoute)
    }

    //（2）注册一级应用
  } else if (item.type === 'app') {
    const firstApp = apps.find((app: AppType) => app.name === item.name)
    if (firstApp && firstApp.route) {
      route?.children?.push(firstApp.route)
    } else {
      // 如果 appList 中配置了，但是 apps 中没有找到，则添加空白页路由
      route?.children?.push({
        path: item.name,
        name: item.name,
        meta: {title: item.title},
        component: () => import('@/components/page/EmptyPage.vue'),
      })
    }
  }
})
// endregion


export {
  projects,
  apps,
  route,
}
