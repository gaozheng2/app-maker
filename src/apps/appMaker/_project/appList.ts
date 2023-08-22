//【模块和应用列表】
// 只有记录在列表中的模块和应用才会加载在项目中
// 第一层为模块和一级应用，显示在标题行
// 第二层为应用组和二级应用，显示在左侧菜单栏
// 第三层为应用入口，显示在左侧菜单栏二级应用折叠菜单下

const appList: AppListItemType[] = [
  {name: 'desktop', type: 'module', title: '工作台', onlyIcon: true, icon: 'home', iconSize: '22px', align: 'left'},  // 可自定义图标大小，默认 22px
  {name: 'widgets', type: 'module', title: '组件库', icon: 'extension',},
  {name: 'app-repo', type: 'module', title: '应用库', icon: 'widgets',},
  {name: 'app-dev', type: 'module', title: '应用开发', icon: 'api',},
  {
    name: 'settings', type: 'module', title: '系统设置', onlyIcon: true, icon: 'settings', align: 'right', children: [
      {name: 'settings', type: 'app', title: '系统设置', icon: 'settings',},
      {name: 'user', type: 'app', title: '用户管理', icon: 'people',},
      {name: 'role', type: 'app', title: '角色管理', icon: 'groups',},
      {name: 'menu', type: 'app', title: '菜单管理', icon: 'menu',},
      {name: 'dict', type: 'app', title: '字典管理', icon: 'list',},
      {name: 'log', type: 'app', title: '日志管理', icon: 'event',},
      {name: 'file', type: 'app', title: '文件管理', icon: 'folder',},
      {name: 'notice', type: 'app', title: '通知管理', icon: 'notifications',},
      {name: 'msg', type: 'app', title: '消息管理', icon: 'message',},
      {name: 'task', type: 'app', title: '任务管理', icon: 'task',},
      {name: 'monitor', type: 'app', title: '监控管理', icon: 'monitor',},
    ]
  },
]


// 构建应用列表，默认构建全部应用，可通过 include 和 exclude 进行过滤
const buildList: BuildListType = {}


export {appList, buildList}
