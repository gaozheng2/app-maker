<!--【Element 通用组件】/【对话框】-->
<script setup lang="ts">
import {computed} from 'vue'

const props = withDefaults(defineProps<{
  title?: string,       // 对话框标题
  icon?: string,        // 对话框图标
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full',  // 对话框尺寸
  height?: string       // 对话框高度
  
  hasSidebar?: boolean, // 是否显示侧边栏
  sidebarWidth?: string // 侧边栏宽度
}>(), {
  title: '对话框',
  size: 'md',
  height: '600px',
  sidebarWidth: '200px',
})


// 传递 v-model
const modelValue = defineModel()


// 根据对话框尺寸，计算对话框宽度和高度
const width = computed(() => {
  switch (props.size) {
    case 'sm':
      return '600px'
    case 'md':
      return '800px'
    case 'lg':
      return '1000px'
    case 'xl':
      return '1200px'
    case 'full':
      return '100vw'
  }
})

const height = computed(() => {
  return props.size === 'full' ? '100vh' : props.height
})
</script>

<template>
  <!--  包裹一层 div，用于动态设置对话框尺寸  -->
  <div>
    <el-dialog v-model="modelValue" v-bind="$attrs"
               align-center :show-close="false"
               :fullscreen="size === 'full'"
               class="!rounded-md !bg-body-bg overflow-hidden"
               :class="{ 'dialog-size': size !== 'full' }"
               :style="`height: ${height}; width: ${width}`">
      
      <div class="w-full h-full flex text-default">
        
        <!--  插槽：侧边栏  -->
        <div v-if="hasSidebar" class="h-full flex flex-col"
             :style="`width: ${sidebarWidth}`">
          <slot name="sidebar"/>
        </div>
        
        <!--  对话框主体  -->
        <div class="flex-1 p-4 pl-6 flex flex-col">
          
          <!--  插槽：对话框标题行  -->
          <slot name="header">
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <EIcon v-if="icon" :name="icon" class="mr-2"/>
                <h4 class="text-default">{{ title }}</h4>
              </div>
              
              <!--  关闭按钮  -->
              <EBtnIcon name="close" size="20px" @click="modelValue = false"/>
            </div>
          </slot>
          
          <!--  插槽：对话框内容  -->
          <slot/>
        </div>
      
      </div>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
// 重写对话框原有样式
:deep(.el-dialog) {
  .el-dialog__body {
    @apply h-full p-0;
  }
  
  // 隐藏标题行
  .el-dialog__header {
    @apply hidden;
  }
}
</style>
