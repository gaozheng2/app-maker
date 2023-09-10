// 【应用注册程序】/【工具】/【读取项目配置】
import {allApps} from './loadApps'
import logoUrl from '/logo.svg'

// 1.读取全部项目配置 projects
const projectFiles = import.meta.glob(
  '/src/apps/**/project.ts',
  {eager: true, import: 'default'}  // eager: true 表示立即加载，import: 'default' 表示只加载 default 导出
)

const projects: ProjectConfigType[] = []  // 项目配置集合
for (let path in projectFiles) {
  const project = projectFiles[path] as ProjectConfigType

  // 如果项目没有 logo，则设置默认 lgo
  if (!project.logo) {
    project.logo = logoUrl
  }

  projects.push(project)
}


// 2.将具有 app.ts 实体文件的应用配置合并到项目的 appList 中
const mergeAppConfig = (appList: AppListItemType[]) => {
  for (let i = 0; i < appList.length; i++) {
    const item = appList[i]

    if (item.type === 'app') {
      const app = allApps.find(app => app.name === item.name)
      if (app) {
        appList[i] = {...item, ...app}
      }
    } else if (item.type === 'module') {
      mergeAppConfig(item.children || [])
    }
  }
}

projects.forEach(project => {
  mergeAppConfig(project.appList)
})


// 3.将一级应用折叠进模块 home 中，生成 project.moduleList，用于按模块展示应用
projects.forEach(project => {
  const moduleList: ModuleType[] = []
  const firstAppList: AppType[] = []

  for (let item of project.appList) {
    // 处理一级应用
    if (item.type === 'app') {
      // 将各应用的 app.ts 中的配置合并到项目的 appList 中
      const app = allApps.find(app => app.name === item.name)
      if (app) {
        item = {...item, ...app}
      }

      firstAppList.push(item)
    }
    // 处理模块
    else if (item.type === 'module') {
      moduleList.push(item)
    }
  }

  if (firstAppList.length > 0) {
    moduleList.unshift({
      type: 'module',
      name: 'home',
      title: '系统应用',
      icon: 'r_grid_view',
      children: firstAppList
    })
  }

  project.moduleList = moduleList
})


/**
 * 读取单个项目配置
 * @param projectName  项目名称
 * @returns project  项目配置
 */
const loadProject = (projectName: string): ProjectConfigType => {
  const project = projects.find(item => item.name.toLowerCase() === projectName.toLowerCase())
  if (!project) {
    throw new Error(`项目 ${projectName} 不存在`)
  }
  return project
}


export {projects, loadProject}
