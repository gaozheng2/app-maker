<!--【应用开发平台】/【工作台 App】/【项目卡片】-->
<script setup lang="ts">
import {useRouter} from 'vue-router'
import {useTheme} from '@/utils/style/useTheme'
import {computed} from 'vue'

const props = defineProps<{
  project: ProjectConfigType, // 项目配置
  isActive: boolean,          // 是否激活
}>()


// 根据是否处于暗色主题下，生成 UI 框架图标的路径
const {isDark} = useTheme()
const uiLogo = computed(() => {
  return `/src/assets/images/ui/${props.project.style.ui.toLowerCase()}_logo${isDark.value ? '_dark' : ''}.svg`
})


// 点击预览按钮，在新窗口打开预览页面
const $router = useRouter()
const onClickPreview = (project: ProjectConfigType) => {
  let routeData = $router.resolve({
    name: 'preview',
    query: {project: project.name},
  })
  window.open(routeData.href, `preview_${project.name}`)
}
</script>

<template>
  <!--  边框  -->
  <div class="group min-w-[280px] h-40 pt-3 flex flex-col rounded border border-line
              cursor-pointer duration-300 select-none
              dark:hover:bg-panel-bg hover:shadow-lg"
       :class="{ 'dark:bg-panel-bg': isActive }">
    
    <!--  UI 框架图标和更新时间  -->
    <div class="px-3 flex justify-between text-xs text-third">
      <el-image :src="uiLogo" class="h-4"/>
      <span>1 分钟前</span>
    </div>
    
    <!--  Logo和系统名称  -->
    <div class="mx-4 flex-1 flex items-center border-b border-line"
         :class="{ 'border-b-0 dark:border-b': isActive }">
      <el-image :src="project.logo" alt="logo"
                class="w-10 h-10 mr-4 cursor-pointer group-hover:brightness-110 drop-shadow"/>
      <div>
        <div class="w-48 whitespace-nowrap overflow-hidden overflow-ellipsis
                    text-lg text-second group-hover:text-title"
             :class="{ 'text-title font-bold': isActive }">
          {{ project.title }}
        </div>
        <div class="w-44 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm text-third">
          {{ project.name }}
        </div>
      </div>
    </div>
    
    <!-- 版本号和操作按钮  -->
    <div class="h-9 px-4 flex justify-between items-center rounded-b duration-300"
         :class="{ 'bg-gradient-to-r from-header-bg to-header-bg2': isActive }">
              <span class="text-sm text-third"
                    :class="{ '!text-header dark:!text-third': isActive }">
                v{{ project.version }}
              </span>
      
      <div class="flex items-center">
        <EBtnIcon name="o_remove_red_eye" size="18px" tooltip="预览"
                  class="mr-2 text-third dark:hover:!text-title"
                  :class="{ '!text-header hover:text-header dark:!text-third': isActive }"
                  @click="onClickPreview(project)"/>
        <EBtnIcon name="o_settings" tooltip="设置"
                  class="text-third dark:hover:!text-title"
                  :class="{ '!text-header hover:text-header dark:!text-third': isActive }"/>
      </div>
    </div>
  
  </div>
</template>
