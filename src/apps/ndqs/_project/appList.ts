//【模块和应用列表】
// 只有记录在列表中的模块和应用才会加载在项目中
// 第一层为模块和一级应用，显示在标题行一级菜单
// 第二层为应用组和二级应用，显示在左侧菜单栏二级菜单
// 第三层为应用入口，显示在左侧菜单栏二级菜单的折叠菜单下

const appList: AppListItemType[] = [
  {name: 'desktop', type: 'module', title: '工作台', icon: 'home', iconSize: '22px', onlyIcon: true,},  // 可自定义图标大小，默认 20px
  {name: 'widgets', type: 'module', title: '组件库', icon: 'extension',},
  {name: 'app-repo', type: 'module', title: '应用库', icon: 'widgets',},
  {name: 'app-dev', type: 'module', title: '应用开发', icon: 'api',},
  {name: 'setting', type: 'module', title: '系统设置', icon: 'settings', onlyIcon: true, align: 'right'},
]


// 构建应用列表，默认构建全部应用，可通过 include 和 exclude 进行过滤
const buildList: BuildListType = {
  include: ['desktop', 'widgets', 'app-repo', 'app-dev', 'setting'],
}


export {appList, buildList}
