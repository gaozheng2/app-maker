<!--【Element 通用组件】/【图标】-->
<script setup lang="ts">
import {computed, ref, watch} from 'vue'

const props = withDefaults(defineProps<{
  name: string,     // 图标名称
  size?: string,    // 图标大小，默认为 16px
  button?: boolean, // 是否为图标按钮
}>(), {
  size: '16px',
})

// 根据图标名称，判断图标类型
// 默认为 filled 类型，o_ 开头的图标为 outlined 类型，r_ 开头的图标为 rounded 类型，s_ 开头的图标为 sharp 类型
let iconName = ref(props.name)
let iconType = ref('')

watch(() => props.name, (val) => {
  iconName.value = val
  
  if (val?.startsWith('o_')) {
    iconName.value = val.slice(2)
    iconType.value = '-outlined'
  } else if (val?.startsWith('r_')) {
    iconName.value = val.slice(2)
    iconType.value = '-round'
  } else if (val?.startsWith('s_')) {
    iconName.value = val.slice(2)
    iconType.value = '-sharp'
  }
}, {immediate: true})


// 动态样式
const classObj = computed(() => {
  return {
    [`material-icons${iconType.value}`]: true,
    'cursor-pointer text-second hover:text-primary': props.button,
  }
})
</script>

<template>
  <i class="select-none"
     :class="classObj"
     :style="`font-size: ${size}`">
    {{ iconName }}
  </i>
</template>
