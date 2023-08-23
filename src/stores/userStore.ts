//【平台数据仓库】/【用户数据仓库】
import {defineStore} from 'pinia'


export const useUserStore = defineStore('user', {
  state: () => ({
    userId: 9527,

  }),
  getters: {
    // 用户名称
    userName: () => {
      return '管理员'
    },

    // 随机生成用户头像
    avatar: () => {
      // 性别，随机0或1
      const random = Math.floor(Math.random() * 2)
      // 头像图片，随机1-14
      const randomNum = Math.floor(Math.random() * 14) + 1
      return `${random}-${randomNum}`
    },
  },

  actions: {},
})
