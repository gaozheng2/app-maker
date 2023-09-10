// 【应用注册程序】/【工具】/【读取应用】

// 扫描 apps 目录下的所有 app.ts 文件，获取应用文件集合 appFiles
const appFiles = import.meta.glob(`/src/apps/**/app.ts`,
  {eager: true, import: 'default'})


// 生成全部应用集合 allApps
const allApps: AppType[] = []

for (let path in appFiles) {
  const app = appFiles[path] as AppType
  // 从路径中获取项目名称，并添加到应用配置中
  app.project = path.split('/')[3].toLowerCase()
  allApps.push(app)
}


/**
 * 读取指定项目的应用
 * @param currentProjectName  项目名称，如果不传，则读取所有项目的应用
 * @returns apps 应用列表
 */
const loadApps = (currentProjectName: string): AppType[] => {
  const apps: AppType[] = []

  for (let app of allApps) {
    if (app.project !== currentProjectName.toLowerCase()) continue  // 如果项目名称不是当前项目，则跳过
    apps.push(app)
  }

  return apps
}


export {loadApps, allApps}
