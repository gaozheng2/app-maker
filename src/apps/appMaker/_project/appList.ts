//【模块和应用列表】
// 只有记录在列表中的模块和应用才会加载在项目中
// 第一层为模块和一级应用，显示在标题行一级菜单
// 第二层为应用组和二级应用，显示在左侧菜单栏二级菜单
// 第三层为应用入口，显示在左侧菜单栏二级菜单的折叠菜单下

const appList: AppListItemType[] = [
  {type: 'app', name: 'desktop', title: '工作台', icon: 'home', onlyIcon: true, iconSize: '22px',},  // 可自定义图标大小，默认 22px
  {type: 'module', name: 'widgets', title: '组件库', icon: 'extension',},
  {type: 'module', name: 'app-repo', title: '应用库', icon: 'widgets',},
  {type: 'module', name: 'app-dev', title: '应用开发', icon: 'api',},
]


// 构建应用列表，默认构建全部应用，可通过 include 和 exclude 进行过滤
const buildList: BuildListType = {
  // 需要构建的应用列表，为空时构建全部应用
  include: ['工作台', 'widgets'],

  // 不需要构建的应用列表，优先级高于 include
  // exclude: ['widgets'],
}


export {appList, buildList}
