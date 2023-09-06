// 【应用注册程序】/【工具】/【读取应用】

// 扫描 apps 目录下的所有 app.ts 文件，获取应用文件集合 appFiles
const appFiles = import.meta.glob(`/src/apps/**/app.ts`,
  {eager: true, import: 'default'})


const loadApps = (currentProjectName?: string): AppDataType[] => {
  const apps: AppDataType[] = []

  for (let path in appFiles) {
    const app = appFiles[path] as AppDataType
    const project = path.split('/')[3].toLowerCase()  // 从路径中获取项目名称

    // 如果传入项目名称，则只筛选该项目的应用
    if (currentProjectName && project !== currentProjectName.toLowerCase()) continue  // 如果项目名称不是当前项目，则跳过

    apps.push(app)
  }

  return apps
}


export {loadApps}
