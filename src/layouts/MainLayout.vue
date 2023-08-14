<!--  【布局】/【主页面布局】  -->
<script setup lang="ts">
import MainHeader from '@/layouts/MainHeader/MainHeader.vue'
import {computed} from 'vue'
import {config} from '@/config/main.config'

// 动态计算 App 页面高度
const appHeight = computed(() => {
  // TODO: 根据门户是否全屏，设置 App 页面高度
  return `calc(100vh - ${config.headerHeight}px)`
})
</script>

<template>
  <!--  页面布局  -->
  <el-container direction="vertical">
    
    <!--  平台标题栏  -->
    <MainHeader v-if="config.isShowLayout"/>
    
    <el-container :style="`height: ${appHeight}`">
      
      <!--  平台菜单栏  -->
      <el-aside width="300px" class="bg-menu-bg border-r border-line">Aside</el-aside>
      
      <!--  页面路由  -->
      <el-main class="!p-0">
        <el-scrollbar>
          <div class="p-4" :style="`min-width: ${config.appMinWidth}px`">
            <template v-for="item in 100">
              <div>
                <el-button type="primary">按钮</el-button>
                <EIcon name="o_check_circle"/>
                <EIcon name="check_circle" class="text-fuchsia-500 text-5xl"/>
                sadfkja;kljiou423askldjfkljasdfklj23iou4io2u34ij;lrf
              </div>
            </template>
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
