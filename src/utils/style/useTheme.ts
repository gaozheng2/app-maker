//【工具函数】/【系统相关】/【设置主题】
import {computed, ref, watch} from 'vue'
import {Dark} from 'quasar'  // 切换 Quasar 框架的暗色主题

type ThemeType = 'Dark' | 'Light' | 'System'

// 主题和颜色变量
let theme = ref<ThemeType>(localStorage.theme || 'System')  // 明/暗主题，默认跟随系统
let themeColor = ref<string>(localStorage.themeColor || 'Default')  // 主题颜色
let isHeaderColor = ref<boolean>(!!localStorage.headerColor || true)  // 标题栏是否着主题色


// 系统主题变化监听器
const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
const eventListener = (e: MediaQueryListEvent) => {
  if (e.matches) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}


// 动态计算是否暗色主题
let isDark = computed(() => {
  return theme.value === 'Dark' || (theme.value === 'System' && matchMedia.matches)
})

// 动态计算是否暗色标题栏（暗色主题或标题栏着色）
let isHeaderDark = computed(() => {  // 标题栏是否着暗色
  return isDark.value || isHeaderColor.value
})


// 监听暗色主题变化
watch(isDark, (value) => {
  if (value) {
    document.documentElement.classList.add('dark')
    Dark.set(true)
  } else {
    document.documentElement.classList.remove('dark')
    Dark.set(false)
  }
}, {immediate: true})


// 监听主题模式变化，如果是系统模式则监听系统主题变化
watch(theme, (themeType) => {
  if (!themeType) return
  localStorage.theme = themeType

  switch (themeType.toLowerCase()) {
    case 'dark':
    case 'light':
      matchMedia.removeEventListener('change', eventListener)
      break
    case 'system':
      matchMedia.addEventListener('change', eventListener)
      break
  }
}, {immediate: true})


// 监听主题颜色变化
watch(themeColor, (value) => {
  // 删除所有 color 开头的类名
  document.documentElement.className = document.documentElement.className.replace(/color-\w+/g, '')
  document.documentElement.classList.add(`color-${value.toLowerCase()}`)
  localStorage.themeColor = value
}, {immediate: true})


// 监听标题栏颜色变化
watch(isHeaderColor, (value) => {
  if (value) {
    document.documentElement.classList.add('header-color')
    localStorage.headerColor = true
  } else {
    document.documentElement.classList.remove('header-color')
    localStorage.removeItem('headerColor')
  }
}, {immediate: true})


// 导出主题变量
export default function useTheme() {
  return {theme, isDark, themeColor, isHeaderColor, isHeaderDark}
}

// 导出主题类型
export type {ThemeType}
