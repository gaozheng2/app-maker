<!--【应用开发平台】/【工作台 App】-->
<script setup lang="ts">
import AppPage from '@/components/page/AppPage.vue'
import ProjectCard from './components/ProjectCard.vue'
import {ref} from 'vue'
import {projects} from '@/apps/_appRegister/utils/loadProjects'
import {onClickOutside} from '@vueuse/core'  // 读取 apps 目录下的所有项目


// 点击项目卡片，设置为激活项目
const activeProject = ref('')

const onClickProject = (project: ProjectConfigType) => {
  activeProject.value = project.name
}


// 点击页面空白处，取消激活项目
const projectCardPanel = ref<HTMLElement | null>(null)
onClickOutside(projectCardPanel, () => {
  activeProject.value = ''
})
</script>

<template>
  <AppPage class="max-w-7xl mx-auto">
    
    <!--  页面标题  -->
    <template #title>
      <EIcon name="apps" size="24px" class="mr-2 text-primary"/>
      开发项目列表
    </template>
    
    <!--  应用卡片  -->
    <el-scrollbar height="188">
      <div ref="projectCardPanel" class="flex flex-nowrap gap-8" @click.self="activeProject = ''">
        <template v-for="project in projects" :key="project.name">
          <ProjectCard :project="project" :is-active="activeProject === project.name"
                       @click="onClickProject(project)"/>
        </template>
      </div>
    </el-scrollbar>
  
  </AppPage>
</template>

<style scoped lang="scss">
.active-project {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--primary);
}
</style>
