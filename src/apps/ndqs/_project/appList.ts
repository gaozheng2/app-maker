//【模块和应用列表】
// - 只有记录在列表中的模块和应用才会加载在项目中
// - 第一层为模块和一级应用，显示在标题行一级菜单
// - 第二层为应用组和二级应用，显示在左侧菜单栏二级菜单
// - 第三层为应用入口，显示在左侧菜单栏二级菜单的折叠菜单下

const appList: AppListItemType[] = [
  {type: 'module', name: 'desktop', title: '工作台', icon: 'home', iconSize: '22px', onlyIcon: true, miniMenu: true},  // 可自定义图标大小，默认 20px
  {type: 'module', name: 'business', title: '组织业务', icon: 'cases',},
  {type: 'module', name: 'project', title: '项目管理', icon: 'rocket',},
  {type: 'module', name: 'product', title: '产品管理', icon: 'lan',},
  {type: 'module', name: 'knowledge', title: '知识中心', icon: 'auto_stories',},
  {
    type: 'module', name: 'system', title: '系统设置', icon: 'settings', onlyIcon: true, align: 'right', children: [
      {type: 'group', name: 'group1', title: '角色权限',},
      {type: 'app', name: 'user', title: '用户管理', icon: 'o_manage_accounts',},
      {type: 'app', name: 'role', title: '角色管理', icon: 'o_groups',},
      {type: 'app', name: 'menu', title: '菜单管理', icon: 'list',},
      {type: 'group', name: 'group1', title: '系统配置',},
      {type: 'app', name: 'dict', title: '字典管理', icon: 'o_bookmark_border',},
      {type: 'app', name: 'log', title: '日志管理', icon: 'event',},
      {type: 'app', name: 'file', title: '文件管理', icon: 'o_description',},
      {type: 'app', name: 'notice', title: '通知管理', icon: 'o_notifications',},
      {type: 'app', name: 'msg', title: '消息管理', icon: 'o_message',},
      {type: 'app', name: 'task', title: '任务管理', icon: 'o_task',},
      {type: 'app', name: 'monitor', title: '监控管理', icon: 'monitor',},
    ]
  },
]


// 构建应用列表，默认构建全部应用，可通过 include 和 exclude 进行过滤
// - include 和 exclude 中的名称为应用或模块的 name 或 title
// - 如果 include 为空，则构建全部应用
// - 如果 exclude 为空，则不排除任何应用，exclude 优先级高于 include
const buildList: BuildListType = {
  // include: ['工作台', 'business', 'task'],
  // exclude: ['系统设置'],
}


export {appList, buildList}
