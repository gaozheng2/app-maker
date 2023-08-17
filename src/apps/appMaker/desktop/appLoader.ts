// 1.扫描 apps 目录下的所有 project.ts 文件，获取项目配置集合 projects
const projectFiles = import.meta.glob(
  '/src/apps/**/project.ts',
  {eager: true, import: 'default'}
)

const projects: ProjectConfigType[] = []  // 项目配置集合

for (let path in projectFiles) {
  const project = projectFiles[path] as ProjectConfigType
  projects.push(project)
}
