//【模块和应用列表】
// 只有记录在列表中的模块和应用才会加载在项目中

const appList: (ModuleListItemType | AppListItemType)[] = [
  {name: 'desktop', title: '', icon: 'home', iconSize: '22px'},  // 可自定义图标大小，默认 20px
  {name: 'widgets', title: '组件库', icon: 'extension',},
  {name: 'app-repo', title: '应用库', icon: 'widgets',},
  {name: 'app-dev', title: '应用开发', icon: 'api',},
]


export {appList}
