<!--【Element 通用组件】/【通用页面】/【应用页面】-->
<script setup lang="ts">
import EPanelTitle from '@/components/page/AppPage/EPanelTitle.vue'

const props = defineProps<{
  title?: string,     // 页面标题
  icon?: string,      // 页面图标
  
  noBread?: boolean,  // 是否隐藏面包屑
  noHelp?: boolean    // 是否隐藏帮助按钮
  noSetting?: boolean // 是否隐藏设置按钮
}>()

const emits = defineEmits<{
  'clickHelp': [],     // 点击帮助按钮
  'clickSetting': [],  // 点击设置按钮
}>()
</script>

<template>
  <main class="p-8 flex flex-col">
    
    <!--  上方面包屑和操作按钮  -->
    <div class="absolute w-full left-0 top-2 px-3 flex justify-between items-center">
      
      <!--  面包屑，顶层 div 为占位用  -->
      <div>
        <EBreadcrumb v-if="!noBread"/>
      </div>
      
      <!--  插槽：右上角操作按钮  -->
      <div class="flex items-center gap-2">
        <slot name="buttons">
          <EBtnIcon v-if="!noHelp" name="help_outline" tooltip="帮助" @click="$emit('clickHelp')"/>
          <EBtnIcon v-if="!noSetting" name="o_settings" tooltip="设置" @click="$emit('clickSetting')"/>
          <EBtnFullscreen/>
        </slot>
      </div>
    </div>
    
    <!--  页面标题  -->
    <EPanelTitle v-if="title" :title="title" :icon="icon"/>
    
    <!--  插槽：主体内容  -->
    <slot/>
  
  </main>
</template>
