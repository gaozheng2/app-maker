<!--【Element 通用组件】/【通用按钮】-->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon?: string,      // 按钮图标
  iconSize?: string,  // 按钮图标大小
  tooltip?: string,   // 按钮提示文字
  tooltipPlacement?: 'top' | 'left' | 'right' | 'bottom',  // 按钮提示位置
}>(), {
  iconSize: '18px',
  tooltipPlacement: 'top',
})
</script>

<template>
  <el-tooltip
    :disabled="!tooltip"
    :content="tooltip"
    :placement="tooltipPlacement"
  >
    
    <el-button type="primary" v-bind="$attrs">
      <EIcon v-if="icon" :name="icon" :size="iconSize" class="-ml-2 mr-1 -mt-px"/>
      <slot/>
    </el-button>
  
  </el-tooltip>
</template>
