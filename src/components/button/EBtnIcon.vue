<!--【Element 通用组件】/【图标按钮】-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string,       // 图标名称
  size?: string,      // 图标大小，默认为 16px
  tooltip?: string,   // 鼠标悬停提示
  tooltipPlacement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end', // 鼠标悬停提示位置
}>(), {
  // size: '16px',
  tooltipPlacement: 'top',
})
</script>

<template>
  <el-tooltip :content="tooltip" :placement="tooltipPlacement" :disabled="!tooltip">
    <EIcon :name="name" :size="size"
           class="cursor-pointer text-third hover:text-primary"
           v-bind="$attrs"/>
  </el-tooltip>
</template>

