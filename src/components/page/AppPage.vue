<!--  【通用页面】/【应用页面框架】  -->
<script setup lang="ts">
const props = defineProps<{
  title?: string,     // 页面标题
  icon?: string,      // 页面图标
  noHelp?: boolean    // 是否隐藏帮助按钮
  noSetting?: boolean // 是否隐藏设置按钮
}>()

const emits = defineEmits<{
  'clickHelp': [],     // 点击帮助按钮
  'clickSetting': [],  // 点击设置按钮
}>()
</script>

<template>
  <main class="p-5 flex flex-col">
    
    <!--  插槽：主体内容  -->
    <slot/>
    
    <!--  插槽：右上角操作按钮  -->
    <div class="absolute right-3 top-2 flex items-center gap-2">
      <slot name="buttons">
        <EBtnIcon v-if="!noHelp" name="help_outline" tooltip="帮助" @click="$emit('clickHelp')"/>
        <EBtnIcon v-if="!noSetting" name="o_settings" tooltip="设置" @click="$emit('clickSetting')"/>
        <EBtnFullscreen/>
      </slot>
    </div>
  
  </main>
</template>
