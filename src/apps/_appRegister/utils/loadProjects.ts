// 【应用注册程序】/【工具】/【读取项目】

const loadProjects = (projectName?: string): ProjectConfigType[] => {
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

  // 读取特定项目
  if (projectName) {
    const project = projects.find(item => item.name.toLowerCase() === projectName.toLowerCase())
    return project ? [project] : []
  }

  return projects
}


export {loadProjects}
