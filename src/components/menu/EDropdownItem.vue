<!--【Element 通用组件】/【下拉菜单选项】-->
<script setup lang="ts">
interface Props {
  icon: string,       // 菜单项图标
  iconSize?: string,  // 图标大小
  label: string,      // 菜单项文本
  divided?: boolean,  // 是否显示分割线
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: '20px',
})
</script>

<template>
  <el-dropdown-item :divided="divided">
    <EIcon :name="icon" :size="iconSize" class="!mr-4"/>
    {{ label }}
  </el-dropdown-item>
</template>
