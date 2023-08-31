<!--  【通用页面】/【空白页面（用于展示建设中的应用）】  -->
<script setup lang="ts">
import {useRoute} from 'vue-router'
import {computed} from 'vue'
import imageUrl from '@/assets/images/empty/empty_page.svg'

// 英文名默认为路由的 name 属性，首字母大写
const $route = useRoute()
let appName = computed(() => {
  const appName = $route.name?.toString()
  return appName?.replace(appName?.[0], appName?.[0].toUpperCase())
})
</script>

<template>
  <div class="h-full flex-col flex-c">
    <h1 class="mt-32 mb-5 text-second">{{ $route.meta.title ?? '应用' }} 建设中 ...</h1>
    
    <h2 class="text-third mb-12">
      {{ appName ?? 'App' }} is under construction ...
    </h2>
    
    <el-image :src="imageUrl" class="w-[720px]" alt=""/>
  </div>
</template>
