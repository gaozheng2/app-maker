/**
 * 项目、模块、应用搜索注册程序
 * @description 从 apps 目录中读取所有 project.js、module.ts、app.ts，并注册到平台中
 * @author gaoz
 * @date 2023/8/16
 */

// 1.扫描 apps 目录下的所有 project.ts 文件，获取项目配置集合 projects
// TODO: app build 模式下，不需要扫描 apps 目录，直接读取要构建的项目配置
const projectFiles = import.meta.glob(
  '/src/apps/*/project.ts',
  {eager: true, import: 'default'}
)
const projects: ProjectConfigType[] = []  // 项目配置集合

for (let path in projectFiles) {
  const project = projectFiles[path] as ProjectConfigType
  projects.push(project)
}

// 2.扫描 apps 目录下的所有 module.ts 文件，获取模块配置集合 modules
export {
  projects,
}
