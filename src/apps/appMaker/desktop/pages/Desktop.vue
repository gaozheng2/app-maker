<!--【应用开发平台】/【工作台 App】-->
<script setup lang="ts">
import AppPage from '@/components/page/AppPage.vue'

// 读取 apps 目录下的所有项目
import {projects} from '@/apps/_appRegister/utils/loadProjects'
import {useRouter} from 'vue-router'


// 点击预览按钮，在新窗口打开预览页面
const $router = useRouter()
const onClickPreview = (project: ProjectConfigType) => {
  let routeData = $router.resolve({
    name: 'preview',
    query: {name: project.name},
  })
  window.open(routeData.href, '_blank')
}
</script>

<template>
  <AppPage class="max-w-7xl mx-auto">
    
    <!--  页面标题  -->
    <template #title>
      <EIcon name="apps" size="24px" class="mr-2 text-primary"/>
      开发项目列表
    </template>
    
    <el-scrollbar height="188">
      <div class="flex flex-nowrap gap-8">
        <template v-for="i in 20">
          <!--  边框  -->
          <div v-for="project in projects" :key="project.name"
               class="group min-w-[280px] max-w-fit h-40 p-3 pb-0 flex flex-col rounded border border-line cursor-pointer
                    dark:hover:bg-panel-bg hover:shadow-lg">
            
            <!--  版本号与更新时间  -->
            <div class="flex justify-between text-xs text-third">
              <span>v{{ project.version }}</span>
              <span>1 分钟前</span>
            </div>
            
            <!--  Logo和系统名称  -->
            <div class="flex-1 flex items-center">
              <el-image :src="project.logo" alt="logo"
                        class="w-10 h-10 mr-4 cursor-pointer group-hover:brightness-110 drop-shadow"/>
              <div>
                <div class="w-48 whitespace-nowrap overflow-hidden overflow-ellipsis
                            text-lg text-second group-hover:text-title">
                  {{ project.title }}
                </div>
                <div class="w-44 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm text-third">
                  {{ project.name }}
                </div>
              </div>
            </div>
            
            <!--  操作按钮  -->
            <div class="h-9 flex justify-end items-center border-t border-line">
              <EIcon button name="o_remove_red_eye" size="18px" tooltip="预览"
                     class="mr-2 text-third"
                     @click="onClickPreview(project)"/>
              <EIcon button name="o_settings" tooltip="设置"
                     class="text-third"/>
            </div>
          
          </div>
        </template>
      </div>
    </el-scrollbar>
  </AppPage>
</template>
