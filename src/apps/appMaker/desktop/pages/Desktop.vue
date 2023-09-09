<!--【应用开发平台】/【工作台 App】-->
<script setup lang="ts">
import AppPage from '@/components/page/AppPage.vue'
import ProjectCard from './components/ProjectCard.vue'
import ModuleCard from '@/apps/appMaker/desktop/pages/components/ModuleCard.vue'
import EPanelTitle from '@/components/panel/EPanelTitle.vue'
import {computed, provide, ref} from 'vue'

// 读取 apps 目录下的所有项目
import {projects} from '@/apps/_appRegister/utils/loadProjects'


// 点击项目卡片，设置为激活项目
const activeProject = ref('')
const onClickProject = (project: ProjectConfigType) => {
  activeProject.value = project.name
}


// 向下传递激活项目的名称
provide('projectName', activeProject)


// 读取激活项目的配置信息
const activeProjectData = computed(() => {
  return projects.find(project => project.name === activeProject.value)
})


// 点击帮助按钮
const onClickHelp = () => {
  alert('点击帮助按钮')
}


// 点击设置按钮
const onClickSetting = () => {
  alert('点击设置按钮')
}
</script>

<template>
  <AppPage class="max-w-7xl mx-auto"
           @click-help="onClickHelp" @click-setting="onClickSetting">
    
    <!--  开发项目列表  -->
    <EPanelTitle title="开发项目" icon="apps"/>
    
    <el-scrollbar height="184">
      <div class="flex flex-nowrap gap-8">
        <!--        <template v-for="i in 10">-->
        <template v-for="project in projects" :key="project.name">
          <ProjectCard :project="project" :is-active="activeProject === project.name"
                       @click="onClickProject(project)"/>
        </template>
        <!--        </template>-->
      </div>
    </el-scrollbar>
    
    
    <!--  模块和应用列表  -->
    <div v-show="activeProject" class="border-t border-line">
      <div class="flex flex-col items-start">
        <template v-for="module in activeProjectData?.moduleList" :key="module.name">
          <ModuleCard :module="module"/>
        </template>
      </div>
    </div>
  
  </AppPage>
</template>
