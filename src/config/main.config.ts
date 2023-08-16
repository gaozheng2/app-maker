//【主配置文件】
const mainConfig = {
  // 当前项目名称，默认为开发平台自身
  // 构建 App 时，需要修改为对应的项目名称
  // currentProjectName: 'AppMaker',  // 应用开发平台
  currentProjectName: 'NDQS',  // 数字质量系统

  // 需要构建的 Module 列表，与 buildAppList 为空时构建所有 Module
  buildModuleList: [],

  // 需要构建的 App 列表，与 buildModuleList 均为空时构建所有 App
  buildAppList: [],
}


export {mainConfig}
