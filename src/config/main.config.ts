//【平台主配置文件】
// 当前环境：development 开发环境 / production 生产环境 / app 应用预览环境
let env = import.meta.env.MODE
// env = 'app'  // 手动设置环境，用于调试

const mainConfig: MainConfigType = {
  // 当前环境
  env,

  // 开发时的项目名称，默认为开发平台自身
  currentProjectName: 'AppMaker',  // 应用开发平台

  // 当前项目的配置，无需指定，系统运行时自动读取
  currentProject: undefined,


  // 构建的项目名称，使用 npm 的 build 指令构建应用项目时使用
  buildProjectName: 'NDQS',  // 数字质量系统

  // 需要构建的 Module 列表，与 buildAppList 均为空时构建所有 Module
  buildModuleList: [],

  // 需要构建的 App 列表，与 buildModuleList 均为空时构建所有 App
  buildAppList: [],
}


export {mainConfig}
