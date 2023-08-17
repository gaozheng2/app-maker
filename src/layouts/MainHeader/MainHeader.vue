<!--  【主页面布局】/【平台标题栏】  -->
<script setup lang="ts">
import MainHeaderTabs from '@/layouts/MainHeader/MainHeaderTabs.vue'
import {mainConfig} from '@/config/main.config'

// 获取当前项目配置
const {currentProject} = mainConfig
const {headerHeight, headerTextColor, headerBgColor, headerBgColor2} = mainConfig.currentProject!.style!


// 设置标题栏的文本和背景颜色
if (headerTextColor) {
  document.documentElement.style.setProperty('--color-header-text', headerTextColor)
}
if (headerBgColor) {
  document.documentElement.style.setProperty('--color-header-bg', headerBgColor)
  console.log('currentProject?.headerBgColor', headerBgColor)
}
if (headerBgColor2) {
  document.documentElement.style.setProperty('--color-header-bg2', headerBgColor2)
} else {  // 如果没有设置第二个背景色，则全部使用第一个背景色
  document.documentElement.style.setProperty('--color-header-bg2', headerBgColor)
}
</script>

<template>
  <el-header :height="`${headerHeight}px`"
             class="flex items-center justify-between
             bg-gradient-to-r from-header-bg to-header-bg2 text-header duration-300">
    
    <!--  Logo和平台名称  -->
    <div class="flex items-center cursor-pointer" @click="$router.push('/')">
      <el-image :src="currentProject?.logo"
                class="w-7 h-7 mr-4 hover:brightness-110 drop-shadow" alt="logo"/>
      <h3 class="text-header whitespace-nowrap">{{ currentProject?.title }}</h3>
    </div>
    
    <!--  一级菜单 Tabs  -->
    <MainHeaderTabs/>
    
    <!--  用户信息  -->
    管理员
  </el-header>
</template>
