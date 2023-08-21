<!--  【主页面布局】/【平台标题栏】  -->
<script setup lang="ts">
import MainHeaderTabs from '@/layouts/ElementLayout/MainHeader/MainHeaderTabs.vue'
import {mainConfig} from '@/config/main.config'
import useTheme from '@/utils/style/useTheme'

// 获取当前项目配置
const {currentProject} = mainConfig

// 获取主题模式
const {isDark} = useTheme()
</script>

<template>
  <el-header :height="`${currentProject?.style.headerHeight}px`"
             class="flex items-center justify-between
             bg-gradient-to-r from-header-bg to-header-bg2 text-header duration-300"
             :class="{ 'border-b border-line' : isDark }">
    
    <!--  【插槽】左侧：Logo和平台名称  -->
    <slot name="logo">
      <div class="flex items-center cursor-pointer" @click="$router.push('/')">
        <el-image :src="currentProject?.logo"
                  class="w-7 h-7 mr-4 hover:brightness-110 drop-shadow" alt="logo"/>
        <h3 class="text-header whitespace-nowrap">{{ currentProject?.title }}</h3>
      </div>
    </slot>
    
    
    <!--  【插槽】中间：一级菜单 Tabs  -->
    <slot name="tabs">
      <MainHeaderTabs/>
    </slot>
    
    
    <!--  【插槽】右侧：用户信息  -->
    <div class="h-full flex items-center">
      <slot name="user">
        <!--  明/暗主题切换按钮  -->
        <EBtnTheme/>
        
        <!--  分割线  -->
        <div class="w-px h-full ml-2 mr-4 py-2">
          <div class="w-full h-full border-r border-line"/>
        </div>
        
        管理员
      </slot>
    </div>
  </el-header>
</template>
