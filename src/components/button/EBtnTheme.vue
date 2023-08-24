<!--【Element 通用组件】/【明/暗主题切换按钮】-->
<script setup lang="ts">
import {useTheme} from '@/utils/style/useTheme'
import {mainConfig} from '@/config/main.config'


// 获取明/暗主题属性
const {currentProject} = mainConfig
const themeKey = currentProject?.name + '-theme'  // localStorage 中存储的 key，规则为：项目名-theme
const {theme, isDark} = useTheme()
saveTheme()  // 初始化时，保存主题到 localStorage


// 点击明/暗主题切换按钮
const onToggleTheme = () => {
  isDark.value = !isDark.value
  theme.value = isDark.value ? 'dark' : 'light'
  saveTheme()
}

const onClickIcon = () => {
  onToggleTheme()
}


// 保存主题到 localStorage
function saveTheme() {
  localStorage.setItem(themeKey, theme.value)
}
</script>

<template>
  <div class="flex items-center">
    <!--  明/暗图标  -->
    <EIcon :name="isDark ? 'dark_mode' : 'light_mode'" size="20px"
           class="cursor-pointer" @click="onClickIcon"/>
    
    <!--  切换开关，自定义背景颜色  -->
    <el-switch
      :model-value="isDark" class="mx-2"
      style="--el-switch-on-color: #2f2f2f; --el-switch-off-color: #49494920"
      @click="onToggleTheme"
    />
  </div>
</template>
