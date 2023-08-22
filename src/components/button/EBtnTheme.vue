<script setup lang="ts">
import useTheme from '@/utils/style/useTheme'
import {mainConfig} from '@/config/main.config'


// 根据当前项目的配置，初始化明/暗主题
const {theme, isDark} = useTheme()
const {currentProject} = mainConfig
theme.value = currentProject?.style.theme!


// 点击明/暗主题切换按钮
const onToggleTheme = () => {
  isDark.value = !isDark.value
  theme.value = isDark.value ? 'dark' : 'light'
}
</script>

<template>
  <div class="flex items-center">
    <EIcon :name="isDark ? 'dark_mode' : 'light_mode'" size="20px"/>
    <el-switch
      :model-value="isDark" class="mx-2"
      style="--el-switch-on-color: #2f2f2f; --el-switch-off-color: #49494920"
      @click="onToggleTheme"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
