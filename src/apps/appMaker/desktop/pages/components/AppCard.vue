<!--【应用开发平台】/【工作台 App】/【应用卡片】-->
<script setup lang="ts">
import type {Ref} from 'vue'
import {inject} from 'vue'
import {useRouter} from 'vue-router'

const props = defineProps<{
  app: AppType,  // 应用数据
}>()


// 接收上级组件传递的激活项目名称
const projectName = inject<Ref<string>>('projectName')


// 点击预览按钮，在新窗口打开预览页面，跳转到对应的应用
const $router = useRouter()
const onClickPreview = () => {
  let routeData = $router.resolve({
    name: 'preview',
    query: {project: projectName?.value, app: props.app.name},
  })
  window.open(routeData.href, `preview_${projectName?.value}`)
}


// 点击开发按钮，跳转到开发页面
const onClickDev = () => {
  $router.push({
    name: 'app-dev',
    query: {project: projectName?.value, app: props.app.name},
  })
}
</script>

<template>
  <div class="group/app w-20 h-16 flex-c flex-col cursor-pointer overflow-visible"
       @click="onClickPreview">
    
    <!--  应用图标  -->
    <div class="relative w-10 h-10 mb-2 flex-c text-second border border-third rounded
                group-hover/app:border-0 group-hover/app:bg-primary group-hover/app:text-white
                group-hover/app:shadow-md
                dark:group-hover/app:bg-panel-bg dark:group-hover/app:border">
      <EIcon :name="app.icon ?? 'crop_square'" size="24px" class=""/>
      
      <!--  右上角预览图标  -->
      <div class="group/icon absolute -right-2 -top-2 w-4 h-4 flex-c border border-line rounded-full
                bg-white opacity-0 duration-300
                group-hover/app:opacity-100 "
           @click.stop="onClickDev">
        <EIcon button name="edit" size="12px" tooltip="开发"
               class="text-second group-hover/icon:text-primary"/>
      </div>
    </div>
    
    <!--  应用名称  -->
    <span class="w-full text-xs text-second text-center whitespace-nowrap overflow-hidden overflow-ellipsis
                 group-hover/app:text-primary group-hover/app:font-bold dark:group-hover/app:text-title">
        {{ app.title }}
    </span>
  
  </div>
</template>
