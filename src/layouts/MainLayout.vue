<!--  【布局】/【主页面布局】  -->
<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'  // 引入 Element 中文语言包
import MainHeader from '@/layouts/MainHeader/MainHeader.vue'
import {ElConfigProvider} from 'element-plus'
import {computed, provide} from 'vue'
import {mainConfig} from '@/config/main.config'
import {projects} from '@/apps/appRegister'

const props = defineProps<{
  project?: string,  // 当前项目名称
}>()

// 如果有 project 参数，则加载该项目配置
// 否则根据平台配置的 currentProject 参数，加载对应的项目配置
const currentProjectName = props.project ?? mainConfig.currentProjectName

const currentProject = projects
  .find((item: ProjectConfigType) => item.name === currentProjectName)


// 将项目配置传递给子组件
provide('currentProject', currentProject)


// 动态计算 App 页面高度
const appHeight = computed(() => {
  // TODO: 根据门户是否全屏，设置 App 页面高度
  return `calc(100vh - ${currentProject?.headerHeight}px)`
})
</script>

<template>
  <!--  Element 配置组件，配置语言  -->
  <el-config-provider :locale="zhCn">
    <!--  页面布局  -->
    <el-container direction="vertical">
      
      <!--  平台标题栏  -->
      <MainHeader v-if="currentProject?.isShowLayout"/>
      
      <el-container :style="`height: ${appHeight}`">
        
        <!--  平台菜单栏  -->
        <el-aside width="300px" class="bg-menu-bg border-r border-line">Aside</el-aside>
        
        <!--  页面内容路由  -->
        <el-main class="!p-0">
          <el-scrollbar>
            <div class="p-4" :style="`min-width: ${currentProject?.appMinWidth}px`">
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
  </el-config-provider>
</template>
