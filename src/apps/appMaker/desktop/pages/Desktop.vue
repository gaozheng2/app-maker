<!--【应用开发平台】/【工作台 App】-->
<script setup lang="ts">
import AppPage from '@/components/page/AppPage.vue'

// 读取 apps 目录下的所有项目
import {projects} from '@/apps/_appRegister/utils/loadProjects'
</script>

<template>
  <AppPage class="max-w-7xl mx-auto">
    
    <!--  页面标题  -->
    <template #title>
      <EIcon name="apps" size="24px" class="mr-2 text-primary"/>
      开发项目列表
    </template>
    
    <div class="grid grid-cols-3 lg:grid-cols-4 gap-8">
      
      <template v-for="i in 20">
        <div v-for="project in projects" :key="project.name"
             class="">
          <el-image :src="project.logo" alt="logo"
                    class="w-10 h-10 mr-4 cursor-pointer hover:brightness-110 drop-shadow"/>
          <div class="min-w-max h-32 p-4 rounded border border-line cursor-pointer
                      dark:hover:bg-panel-bg hover:shadow-lg">
            <div class="text-xl">{{ project.title }}</div>
            <div class="text-sm text-gray-400">{{ project.name }}</div>
          </div>
        </div>
      </template>
    
    </div>
  </AppPage>
</template>
