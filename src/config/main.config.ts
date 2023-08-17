//【平台主配置文件】
// 当前环境：development 开发环境 / production 生产环境 / preview 应用预览环境
let env = import.meta.env.MODE
// env = 'preview'  // 手动设置环境，用于调试

const mainConfig: MainConfigType = {
  // 当前环境
  env,

  // 开发时的项目名称，默认为开发平台自身
  currentProjectName: 'AppMaker',  // 应用开发平台
  // currentProjectName: 'NDQS',  // 数字质量系统


  // 构建的项目名称，使用 npm 的 build 指令构建应用项目时使用
  buildProjectName: 'NDQS',
}


export {mainConfig}
