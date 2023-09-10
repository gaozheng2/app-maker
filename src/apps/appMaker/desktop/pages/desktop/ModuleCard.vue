<!--【应用开发平台】/【工作台 App】/【模块卡片】-->
<script setup lang="ts">
import AppCard from './AppCard.vue'

const props = defineProps<{
  module: ModuleType,  // 模块数据
}>()
</script>

<template>
  <div class="group w-full flex items-center border-b border-line select-none">
    
    <!--  模块图标和标题  -->
    <div class="w-40 h-8 pl-4 flex items-center border-r border-line">
      <EIcon :name="module.icon" :size="module.iconSize ?? '18px'" class="mr-2 text-second"/>
      <span class="w-32 ellipsis">
        {{ module.title }}
      </span>
    </div>
    
    <!--  应用列表  -->
    <el-scrollbar height="80" class="w-full pb-4">
      <div class="h-full pt-4 px-4 flex items-center gap-4">
        <template v-for="(app,index) in module.children">
          
          <!--  应用组  -->
          <!--          <div v-if="app.type === 'group'" :class="{ 'ml-4': index !== 0 }">-->
          <!--            <div class="max-w-[100px] text-sm text-second -mr-4 ellipsis">【{{ app.title }}】</div>-->
          <!--          </div>-->
          
          <!--  应用卡片  -->
          <AppCard v-if="app.type === 'app'" :app="app"/>
        
        </template>
      </div>
    </el-scrollbar>
  
  </div>
</template>
