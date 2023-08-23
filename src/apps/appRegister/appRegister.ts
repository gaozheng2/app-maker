/**
 * 项目、模块、应用搜索注册程序
 * @description 从 apps 目录中读取所有 project.js、module.ts、app.ts，并注册到平台中
 * @author gaoz
 * @date 2023/8/23
 */
import type {RouteRecordRaw} from 'vue-router'
import {mainConfig} from '@/config/main.config'


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


// 1.3 生成当前项目的路由，提供给 router
const route: RouteRecordRaw = currentProject!.route


// 1.4 设置当前项目的样式
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


// region 2.加载当前项目的模块 modules
currentProject.appList.forEach((app: AppListItemType) => {
  // 2.1.加载当前项目的模块
  if (app.type === 'module') {
    route.children.push({
      path: app.name,
      name: app.name,
      meta: {title: app.title},
      component: () => import('@/components/page/EmptyPage.vue'),
    })

    // 2.2.加载当前模块的应用组
  } else if (app.type === 'group') {
    // 在第一层没有应用组
  } else if (app.type === 'app') {

  }
})
// endregion

// 3.扫描 apps 目录下的所有 module.ts 文件，获取模块配置集合 modules

export {
  projects,
  route,
}
