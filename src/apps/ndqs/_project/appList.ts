//【模块和应用列表】
// 只有记录在列表中的模块和应用才会加载在项目中

const appList: AppListItemType[] = [
  {name: 'desktop', type: 'module', title: '工作台', icon: 'home', iconSize: '22px', onlyIcon: true,},  // 可自定义图标大小，默认 20px
  {name: 'widgets', type: 'module', title: '组件库', icon: 'extension',},
  {name: 'app-repo', type: 'module', title: '应用库', icon: 'widgets',},
  {name: 'app-dev', type: 'module', title: '应用开发', icon: 'api',},
  {name: 'setting', type: 'module', title: '系统设置', icon: 'settings', onlyIcon: true, align: 'right'},
]


export {appList}
