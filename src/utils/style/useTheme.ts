//【工具函数】/【系统相关】/【设置主题】
import {computed, ref, watch} from 'vue'
import {Dark} from 'quasar'  // 切换 Quasar 框架的暗色主题

type ThemeType = 'Dark' | 'Light' | 'System'

// 主题和颜色变量
let theme = ref<ThemeType>(localStorage.theme || 'System')  // 明/暗主题，默认跟随系统
let isDark = ref<boolean>(false)  // 是否暗色主题


// 系统主题变化监听器
const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
const eventListener = (e: MediaQueryListEvent) => {
  setTheme(e.matches)
}


const setTheme = (isDarkTemp: boolean) => {
  if (isDarkTemp) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  Dark.set(isDarkTemp)
  isDark.value = isDarkTemp
}


// 监听主题模式变化，如果是系统模式则监听系统主题变化
watch(theme, (themeType) => {
  if (!themeType) return
  localStorage.theme = themeType

  switch (themeType.toLowerCase()) {
    case 'dark':
      matchMedia.removeEventListener('change', eventListener)
      setTheme(true)
      break
    case 'light':
      matchMedia.removeEventListener('change', eventListener)
      setTheme(false)
      break
    case 'system':
      matchMedia.addEventListener('change', eventListener)
      setTheme(matchMedia.matches)
      break
  }
}, {immediate: true})


// 导出主题变量
export default function useTheme() {
  return {theme, isDark}
}

// 导出主题类型
export type {ThemeType}
