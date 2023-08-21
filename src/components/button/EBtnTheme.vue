<script setup lang="ts">
import useTheme from '@/utils/style/useTheme'
import {mainConfig} from '@/config/main.config'
import {ref} from 'vue'


// 根据当前项目的配置，初始化明/暗主题
const {theme, isDark} = useTheme()
const {currentProject} = mainConfig
theme.value = currentProject?.style.theme!


// 点击明/暗主题切换按钮
const switchValue = ref(isDark.value)
const onToggleTheme = () => {
  theme.value = switchValue.value ? 'Dark' : 'Light'
}
</script>

<template>
  <div class="flex items-center">
    <EIcon :name="isDark ? 'dark_mode' : 'light_mode'" size="20px"/>
    <el-switch
      v-model="switchValue" class="mx-2"
      style="--el-switch-on-color: #2f2f2f; --el-switch-off-color: #49494920"
      @change="onToggleTheme"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
