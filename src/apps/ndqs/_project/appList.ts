//【模块和应用列表】
// 只有记录在列表中的模块和应用才会加载在项目中
// 第一层为模块和一级应用，显示在标题行一级菜单
// 第二层为应用组和二级应用，显示在左侧菜单栏二级菜单
// 第三层为应用入口，显示在左侧菜单栏二级菜单的折叠菜单下

const appList: AppListItemType[] = [
  {name: 'desktop', type: 'module', title: '工作台', icon: 'home', iconSize: '22px', onlyIcon: true,},  // 可自定义图标大小，默认 20px
  {name: 'business', type: 'module', title: '组织业务', icon: 'cases',},
  {name: 'project', type: 'module', title: '项目管理', icon: 'rocket',},
  {name: 'product', type: 'module', title: '产品管理', icon: 'lan',},
  {name: 'knowledge', type: 'module', title: '知识中心', icon: 'auto_stories',},
  {
    name: 'system', type: 'module', title: '系统设置', onlyIcon: true, icon: 'settings', align: 'right', children: [
      {type: 'group', title: '角色权限',},
      {name: 'user', type: 'app', title: '用户管理', icon: 'people',},
      {name: 'role', type: 'app', title: '角色管理', icon: 'groups',},
      {name: 'menu', type: 'app', title: '菜单管理', icon: 'menu',},
      {type: 'group', title: '系统配置',},
      {name: 'dict', type: 'app', title: '字典管理', icon: 'list',},
      {name: 'log', type: 'app', title: '日志管理', icon: 'event',},
      {name: 'file', type: 'app', title: '文件管理', icon: 'folder',},
      {name: 'notice', type: 'app', title: '通知管理', icon: 'notifications',},
      {name: 'msg', type: 'app', title: '消息管理', icon: 'message',},
      {name: 'task', type: 'app', title: '任务管理', icon: 'task',},
      {name: 'monitor', type: 'app', title: '监控管理', icon: 'monitor',},
    ]
  },]


// 构建应用列表，默认构建全部应用，可通过 include 和 exclude 进行过滤
const buildList: BuildListType = {
  include: ['desktop', 'widgets', 'app-repo', 'app-dev', 'setting'],
}


export {appList, buildList}
