<!--【应用开发平台】/【工作台 App】/【项目配置对话框】-->
<script setup lang="ts">
import {defineAsyncComponent, markRaw} from 'vue'

const props = withDefaults(defineProps<{
  project: ProjectConfigType,  // 项目配置
}>(), {})


// 菜单栏数据
const menuData = [
  {
    name: 'role', title: '角色管理', icon: 'people',
    component: markRaw(defineAsyncComponent(() => import('./Role.vue')))
  },
  {name: 'user', title: '用户管理', icon: 'people'},
  {name: 'menu', title: '菜单管理', icon: 'menu'},
  {name: 'dict', title: '字典管理', icon: 'o_book'},
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
