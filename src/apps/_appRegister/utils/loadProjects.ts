// 【应用注册程序】/【工具】/【读取项目】

// 读取全部项目
const projectFiles = import.meta.glob(
  '/src/apps/**/project.ts',
  {eager: true, import: 'default'}  // eager: true 表示立即加载，import: 'default' 表示只加载 default 导出
)

const projects: ProjectConfigType[] = []  // 项目配置集合
for (let path in projectFiles) {
  const project = projectFiles[path] as ProjectConfigType
  projects.push(project)
}


// 将一级应用折叠进模块 home 中，生成 project.moduleList，用于按模块展示应用
projects.forEach(project => {
  const moduleList: ModuleType[] = []
  const firstAppList: AppType[] = []

  for (let item of project.appList!) {
    if (item.type === 'app') {
      firstAppList.push(item)
    } else if (item.type === 'module') {
      moduleList.push(item)
    }
  }

  if (firstAppList.length > 0) {
    moduleList.unshift({
      type: 'module',
      name: 'home',
      title: '系统应用',
      icon: 'apps',
      children: firstAppList
    })
  }

  project.moduleList = moduleList
})


// 读取单个项目
const loadProject = (projectName: string): ProjectConfigType => {
  const project = projects.find(item => item.name.toLowerCase() === projectName.toLowerCase())
  if (!project) {
    throw new Error(`项目 ${projectName} 不存在`)
  }
  return project
}


export {projects, loadProject}
