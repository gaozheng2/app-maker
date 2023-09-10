<!--【应用开发平台】/【工作台 App】/【项目配置对话框】-->
<script setup lang="ts">
import {defineAsyncComponent, markRaw} from 'vue'

const props = withDefaults(defineProps<{
  project: ProjectConfigType,  // 项目配置
}>(), {})


// 菜单栏数据
const menuData = [
  {
    name: 'base', title: '基本配置', icon: 'tune',
    component: markRaw(defineAsyncComponent(() => import('./Role.vue')))
  },
  {name: 'style', title: '主题样式', icon: 'o_palette'},
  {name: 'env', title: '环境地址', icon: 'alternate_email'},
  {name: 'route', title: '项目路由', icon: 'o_account_tree'},
  {name: 'apps', title: '应用列表', icon: 'apps'},
]
</script>

<template>
  <EDialogSetting subtitle="项目配置" :menu-data="menuData">
    <!--  主标题插槽  -->
    <template #title>
      <el-image :src="project.logo" alt="logo"
                class="w-5 h-5 mr-4 drop-shadow"/>
      <h4 class="text-header">{{ project.title }}</h4>
    </template>
  </EDialogSetting>
</template>
