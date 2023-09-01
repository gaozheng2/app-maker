// 【应用注册程序】/【工具】/【过滤应用列表】

// 根据构建列表的 include 和 exclude 过滤应用列表
const filterAppList = (appList: AppListItemType[], buildList: BuildListType, onlyExclude: boolean): AppListItemType[] => {
  const result: AppListItemType[] = []
  const {include, exclude} = buildList

  for (let app of appList) {
    let moduleInclude = false

    // 判断 include 是否存在，如果存在，则判断是否在 include 中，且不在 exclude 中
    if (!onlyExclude && include && include?.length > 0) {
      if ((include.includes(app.name) || include.includes(app.title))
        && !exclude?.includes(app.name) && !exclude?.includes(app.title)) {
        // 引入整个模块
        if (app.type === 'module') {
          moduleInclude = true
        }
        result.push(app)
      }

      // 如果没有设置 include，则只判断是否在 exclude 中
    } else {
      if (!exclude?.includes(app.name) && !exclude?.includes(app.title)) {
        result.push(app)
      }
    }

    // 如果有子应用，则递归过滤子应用
    if (app.type === 'module') {
      if (app.children && app.children.length > 0) {
        // 如果模块被 include，则子应用全部引入，只判断是否 exclude
        if (moduleInclude) {
          app.children = filterAppList(app.children, buildList, true)
        } else {
          app.children = filterAppList(app.children, buildList, false)
        }
      }
    }
  }

  return result
}


export {filterAppList}
