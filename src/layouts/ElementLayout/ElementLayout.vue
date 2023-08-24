<!--  【布局】/【Element-plus 布局】/【主页面布局】  -->
<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'  // 引入 Element 中文语言包
import {ElConfigProvider} from 'element-plus'
import MainHeader from '@/layouts/ElementLayout/MainHeader/MainHeader.vue'
import {computed} from 'vue'
import {mainConfig} from '@/config/main.config'
import 'element-plus/theme-chalk/dark/css-vars.css'  // 引入 Element 暗黑主题样式

// 获取当前项目配置
const {currentProject} = mainConfig


// 动态计算 App 页面高度
const appHeight = computed(() => {
  // TODO: 根据门户是否全屏，设置 App 页面高度
  return `calc(100vh - ${currentProject?.style.headerHeight}px)`
})
</script>

<template>
  <!--  Element 配置组件，配置语言  -->
  <el-config-provider :locale="zhCn">
    <!--  页面布局  -->
    <el-container direction="vertical">
      
      <!--  平台标题栏，向上暴露插槽，主要自定义 user 插槽内容  -->
      <MainHeader v-if="currentProject?.isShowLayout">
        <template #logo>
          <slot name="logo"/>
        </template>
        <template #tabs>
          <slot name="tabs"/>
        </template>
        <template #user>
          <slot name="user"/>
        </template>
      </MainHeader>
      
      <!--  页面主体，根据标题栏高度自适应页面主体高度  -->
      <el-container :style="`height: ${appHeight}`">
        
        <!--  平台菜单栏  -->
        <el-aside :width="`${currentProject?.style.menuWidth}px` ?? '300px'"
                  class="bg-menu-bg border-r border-line">
          Aside
        </el-aside>
        
        <!--  页面内容路由  -->
        <el-main class="!p-0">
          <el-scrollbar>
            <RouterPage/>
          </el-scrollbar>
        </el-main>
      
      </el-container>
    </el-container>
  </el-config-provider>
</template>
