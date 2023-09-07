<!--【应用开发平台】/【工作台 App】/【模块卡片】-->
<script setup lang="ts">
import AppCard from './AppCard.vue'

const props = defineProps<{
  module: ModuleType,  // 模块数据
}>()
</script>

<template>
  <div class="group w-48 flex flex-col items-center
              select-none whitespace-nowrap overflow-hidden overflow-ellipsis">
    <!--  模块标题  -->
    <div class="w-full h-8 mb-4 flex-c border-r border-line group-last:border-r-0">
      <EIcon :name="module.icon" size="18px" class="mr-2 text-second"/>
      {{ module.title }}
    </div>
    
    <!--  应用列表  -->
    <el-scrollbar class="w-full" style="height: calc(100vh - 400px)">
      <div class="flex-c flex-col gap-4">
        <template v-for="app in module.children">
          
          <!--  应用组  -->
          <div v-if="app.type === 'group'" class="w-full pl-8 not:first:mt-4 flex text-second text-left">
            {{ app.title }}
          </div>
          
          <!--  应用卡片  -->
          <AppCard v-else :app="app"/>
        
        </template>
      </div>
    </el-scrollbar>
  
  </div>
</template>
