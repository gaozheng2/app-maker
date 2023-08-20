//【平台主配置文件】
// 当前环境：development 开发环境 / production 生产环境 / preview 应用预览环境
let env = import.meta.env.MODE
// env = 'preview'  // 手动设置环境，用于调试

const mainConfig: MainConfigType = {
  // 当前环境
  env,

  // 开发环境运行的项目名称，默认为开发平台自身
  currentProjectName: 'AppMaker',  // 应用开发平台
  // currentProjectName: 'NDQS',  // 数字质量系统


  // 构建的项目名称，使用 npm 的 build 指令构建应用项目时使用
  buildProjectName: 'NDQS',


  // 构建模式：project 项目模式 / app 应用模式
  // project 模式：构建整个项目，包括项目的所有模块和应用，页面标题栏和菜单栏由项目统一管理
  // app 模式：构建单个或多个应用，没有页面标题栏和菜单栏，通过路由访问各应用
  buildMode: 'project',
}


export {mainConfig}
