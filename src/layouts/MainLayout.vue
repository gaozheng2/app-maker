<!--  【布局】/【主页面布局】  -->
<script setup lang="ts">
import {defineAsyncComponent} from 'vue'
import {mainConfig} from '@/config/main.config'

// 获取当前项目配置
const {currentProject} = mainConfig


// 根据当前项目的 UI 框架，引入对应的布局组件
const layoutComponents: { [key: string]: any } = {
  element: defineAsyncComponent(() => import('@/layouts/ElementLayout/ElementLayout.vue')),
  quasar: defineAsyncComponent(() => import('@/layouts/QuasarLayout/QuasarLayout.vue')),
}

const Layout = layoutComponents[currentProject?.style.ui ?? 'element']
</script>

<template>
  <component :is="Layout"/>
</template>
