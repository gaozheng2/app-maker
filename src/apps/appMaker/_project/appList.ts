//【模块和应用列表】
// 只有记录在列表中的模块和应用才会加载在项目中
// 第一层为显示在标题行的模块和一级应用
// 第二层为显示在左侧菜单栏的应用组和二级应用
// 第三层为显示在左侧菜单栏二级应用折叠菜单下的三级应用

const appList: AppListItemType[] = [
  {name: 'desktop', type: 'module', title: '工作台', onlyIcon: true, icon: 'home', iconSize: '22px', align: 'left'},  // 可自定义图标大小，默认 22px
  {name: 'widgets', type: 'module', title: '组件库', icon: 'extension',},
  {name: 'app-repo', type: 'module', title: '应用库', icon: 'widgets',},
  {name: 'app-dev', type: 'module', title: '应用开发', icon: 'api',},
  {name: 'settings', type: 'module', title: '系统设置', onlyIcon: true, icon: 'settings', align: 'right'},
]


export {appList}
