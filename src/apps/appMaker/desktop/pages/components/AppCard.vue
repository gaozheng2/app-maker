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
  console.log('routeData', routeData)
  window.open(routeData.href, `preview_${projectName?.value}`)
}
</script>

<template>
  <div class="group/app relative w-32 h-12 flex-c border border-line text-second rounded
              cursor-pointer duration-300
              hover:shadow-md hover:text-default dark:hover:bg-panel-bg"
       @click="onClickPreview">
    
    <!--  应用图标和名称  -->
    <div class="flex items-center opacity-100 duration-300 group-hover/app:opacity-0">
      <EIcon :name="app.icon ?? 'crop_square'" size="18px" class="mr-2"/>
      {{ app.title }}
    </div>
    <!--  编辑和预览图标  -->
    <div class="absolute inset-0 w-full h-full opacity-0 rounded duration-300
                group-hover/app:opacity-100 ">
      编辑
    </div>
  
  </div>
</template>
