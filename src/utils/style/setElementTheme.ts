// 设置 Element 主题颜色
import {colors} from 'quasar'

// 根据 theme.css 设置的基础颜色，生成对应的辅助颜色
const setElementTheme = () => {
  const typeArray = ['primary', 'success', 'warning', 'danger', 'info']

  for (let type of typeArray) {
    // 从 css 变量中获取基础颜色
    const baseColor = getComputedStyle(document.documentElement).getPropertyValue(`--color-${type}`)
    setColor(baseColor, type)
  }
}


// 根据给出的基础颜色，生成对应的 light-3、5、7、8、9 和 dark-2 颜色
const setColor = (baseColor: string, type: string) => {
  const style = document.documentElement.style

  style.setProperty(`--el-color-${type}`, baseColor)
  style.setProperty(`--el-color-${type}-dark-2`, colors.lighten(baseColor, -20))

  for (let i of [3, 5, 7, 8, 9]) {
    style.setProperty(`--el-color-${type}-light-${i}`, colors.lighten(baseColor, i * 10))
  }
}


export {setElementTheme}
