// 【应用注册程序】/【工具】/【扁平化应用列表】

// 将项目的 appList.ts 中的应用列表扁平化，且只保留 type 为 app 的应用
const flatAppList = (appList: AppType[], bulidList: BuildListType): AppType[] => {
  console.log('appList', appList)
  const apps: AppType[] = _pushApp(appList, bulidList)


  console.log('apps', apps)
  return apps
}

// 递归查找应用，并判断是否在构建列表中
function _pushApp(appList: AppType[], bulidList: BuildListType): AppType[] {
  const apps: AppType[] = []
  const {include, exclude} = bulidList

  for (let app of appList) {
    if (app.type === 'app') {
      // 如果在构建列表中，则添加到 apps 中

      if (include && include?.length > 0) {
        console.log('include', include)
        if (include.includes(app.name) && !exclude?.includes(app.name)) {
          console.log('app', app)
          apps.push(app)
        }
      } else {
        if (!exclude?.includes(app.name)) {
          apps.push(app)
        }
      }
      // 如果是模块，则递归查找子应用
    } else if (app.type === 'module') {
      apps.concat(_pushApp(app.children || []) || [])
    }
  }

  return apps
}

export {flatAppList}
