<!--  【面板组件】/【面板标题】  -->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string,     // 标题
  icon?: string,      // 图标
  iconSize?: string,  // 图标大小
}>(), {
  title: '栏目标题',
  icon: 'apps',
  iconSize: '20px',
})
</script>

<template>
  <h3 class="my-4 flex items-center select-none">
    <EIcon :name="icon" :size="iconSize" class="mr-2 text-primary"/>
    <span>
      {{ title }}
    </span>
  </h3>
</template>
