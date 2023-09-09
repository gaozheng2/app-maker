<!--【应用开发平台】/【项目预览布局】-->
<script setup lang="ts">
import {onActivated, ref, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {mainConfig} from '@/config/main.config'
import {appRegister} from '@/apps/_appRegister/appRegister'


// 读取并设置预览项目名称
const $route = useRoute()
mainConfig.currentProjectName = $route.query.project as string
sessionStorage.setItem('currentProjectName', mainConfig.currentProjectName)


// 初始化项目，添加预览项目的路由
const $router = useRouter()
$router.removeRoute('home')
const {route} = appRegister()
$router.addRoute(route)


// 每次激活时，跳转至根路径 | 对应的应用
const isLoading = ref(true)

onActivated(() => {
  const appName = $route.query.app as string
  
  if (appName) {
    $router.replace({name: appName})
      .then(() => {
        isLoading.value = false
      })
  } else {
    $router.replace('/')
      .then(() => {
        isLoading.value = false
      })
  }
})
</script>

<template>
  <!--  显示加载动画  -->
  <div v-loading.fullscreen="isLoading"/>
</template>
