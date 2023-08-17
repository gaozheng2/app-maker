//【平台数据仓库】
import {defineStore} from 'pinia'
import {mainConfig} from '@/config/main.config'

export const useMainStore = defineStore('main', {
  state: () => ({
    isFullscreen: false,  // 是否全屏

    // currentModule: <ModuleType | null>null,  // 当前模块信息
  }),
  getters: {},

  actions: {
    // 设置当前模块
    // setCurrentModule(module: string) {
    //   if (!module) {
    //     this.currentModule = null
    //     return
    //   }
    //   this.currentModule = modules.find(m => m.name === module) || null
    // }
  },
})
