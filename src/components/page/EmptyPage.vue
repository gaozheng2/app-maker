<!--【Element 通用组件】/【通用页面】/【空白页面】（用于展示建设中的应用）-->
<script setup lang="ts">
import {useRoute} from 'vue-router'
import {computed} from 'vue'
import {firstUpperCase} from '@/utils/data/firstUpperCase'
import {useTheme} from '@/utils/style/useTheme'


// 英文名默认为路由的 name 属性，首字母大写
const $route = useRoute()
let appName = computed(() => {
  const appName = $route.name?.toString()
  return firstUpperCase(appName ?? 'App')
})


// 根据明/暗主题参数，计算背景图片路径
const {isDark} = useTheme()

const imageUrl = computed(() => {
  return new URL(`../../assets/images/empty/empty_page${isDark.value ? '_dark' : ''}.svg`, import.meta.url)?.href
})
</script>

<template>
  <AppPage no-help no-setting>
    <div class="h-full flex-col flex-c select-none">
      <h1 class="mt-24 mb-5 text-second whitespace-nowrap">{{ $route.meta.title ?? '应用' }} 建设中 ...</h1>
      
      <h2 class="text-third mb-12 whitespace-nowrap">
        {{ appName ?? 'App' }} is under construction ...
      </h2>
      
      <el-image :src="imageUrl" class="w-[40vw]" alt="empty"/>
    </div>
  </AppPage>
</template>
