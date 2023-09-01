// 【应用注册程序】/【工具】/【扁平化应用列表】

// 将项目的 appList.ts 中的应用列表扁平化，且只保留 type 为 app 的应用
const flatAppList = (appList: AppListItemType[]): AppType[] => {
  let apps: AppType[] = []

  for (let app of appList) {
    if (app.type === 'app') {
      apps.push(app)
    }

    if (app.type === 'module') {
      apps.push(...flatAppList(app.children || []))
    }
  }

  return apps
}


export {flatAppList}
