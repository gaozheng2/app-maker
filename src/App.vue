<!--  【主页面路由】  -->
<script setup lang="ts">
import RouterPage from '@/components/page/RouterPage.vue'
import type {ThemeType} from '@/utils/style/useTheme'
import {useTheme} from '@/utils/style/useTheme'
import {mainConfig} from '@/config/main.config'


// 根据当前项目配置，初始化明/暗主题
const {currentProject} = mainConfig
const themeKey = currentProject?.name + '-theme'  // localStorage 中存储的 key，规则为：项目名-theme
const initTheme = localStorage.getItem(themeKey) as ThemeType ?? currentProject?.style.theme ?? 'system'

useTheme(initTheme)
</script>

<template>
  <RouterPage/>
</template>
