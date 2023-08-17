<!--  【主页面布局】/【平台标题栏】  -->
<script setup lang="ts">
import MainHeaderTabs from '@/layouts/MainHeader/MainHeaderTabs.vue'
import {mainConfig} from '@/config/main.config'

// 获取当前项目配置
const {currentProject} = mainConfig

// 设置标题行背景颜色
console.log('currentProject', currentProject)
if (currentProject?.headerTextColor) {
  document.documentElement.style.setProperty('--color-header-text', currentProject!.headerTextColor)
}
if (currentProject?.headerBgColor) {
  document.documentElement.style.setProperty('--color-header-bg', currentProject!.headerBgColor)
  console.log('currentProject?.headerBgColor', currentProject?.headerBgColor)
}
if (currentProject?.headerBgColor2) {
  console.log('currentProject?.headerBgColor2', currentProject?.headerBgColor2)
  document.documentElement.style.setProperty('--color-header-bg2', currentProject!.headerBgColor2)
}else{  // 如果没有设置第二个背景色，则全部使用第一个背景色
    document.documentElement.style.setProperty('--color-header-bg2', currentProject!.headerBgColor)
}
</script>

<template>
  <el-header :height="`${currentProject?.headerHeight}px`"
             class="flex items-center justify-between
             bg-gradient-to-r from-header-bg to-header-bg2 text-header duration-300">
    
    <!--  Logo和平台名称  -->
    <div class="flex items-center cursor-pointer" @click="$router.push('/')">
      <el-image :src="currentProject?.logo"
                class="w-7 h-7 mr-4 hover:brightness-110 drop-shadow" alt="logo"/>
      <h3 class="text-header">{{ currentProject?.title }}</h3>
    </div>
    
    <!--  一级菜单 Tabs  -->
    <MainHeaderTabs/>
    
    <!--  用户信息  -->
    管理员
  </el-header>
</template>
