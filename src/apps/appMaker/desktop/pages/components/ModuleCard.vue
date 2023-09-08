<!--【应用开发平台】/【工作台 App】/【模块卡片】-->
<script setup lang="ts">
import AppCard from './AppCard.vue'

const props = defineProps<{
  module: ModuleType,  // 模块数据
}>()
</script>

<template>
  <div class="group w-full flex items-center border-b border-line
              select-none whitespace-nowrap overflow-hidden overflow-ellipsis">
    <!--  模块标题  -->
    <div class="w-40 h-8 pl-4 flex items-center border-r border-line">
      <EIcon :name="module.icon" size="18px" class="mr-2 text-second"/>
      {{ module.title }}
    </div>
    
    <!--  应用列表  -->
    <el-scrollbar height="80" class="w-full pb-4">
      <div class="h-full pt-4 px-4 flex items-center gap-4">
        <template v-for="(app,index) in module.children">
          
          <!--  应用组  -->
          <div v-if="app.type === 'group'" :class="{ 'ml-4': index !== 0 }">
            <span class="text-sm text-second -mr-2">【{{ app.title }}】</span>
          </div>
          
          <!--  应用卡片  -->
          <AppCard v-else :app="app"/>
        
        </template>
      </div>
    </el-scrollbar>
  
  </div>
</template>
