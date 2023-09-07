//【工具函数】/【样式】/【动态设置明/暗主题】
import type {Ref} from 'vue'
import {ref, watch} from 'vue'
import {Dark} from 'quasar'  // 切换 Quasar 框架的暗色主题

type ThemeType = 'dark' | 'light' | 'system'


// 主题和颜色变量
let theme = ref<ThemeType>('system')  // 明/暗主题，默认跟随系统
let isDark = ref<boolean>(false)  // 是否暗色主题


// 系统主题变化监听器
const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
const eventListener = (e: MediaQueryListEvent) => {
  setTheme(e.matches)
}


// 设置主题
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


/**
 * 明/暗主题 hooks 函数
 * @param initTheme  初始化的主题类型
 * @returns {theme, isDark}  theme: 主题类型，isDark: 是否暗色主题
 */
type UseThemeType = (initTheme?: ThemeType) => {
  theme: Ref<ThemeType>,  // 主题类型
  isDark: Ref<boolean>,   // 是否暗色主题
}

const useTheme: UseThemeType = (initTheme?: ThemeType) => {
  if (initTheme) {
    theme.value = initTheme
  }
  return {theme, isDark}
}


// 导出 hooks 和主题类型
export {useTheme}
export type {ThemeType}
