<script setup lang="ts">
import {ref, watch} from 'vue'

const props = withDefaults(defineProps<{
  name: string,   // 图标名称
  size?: string,  // 图标大小，默认为 16px
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
</script>

<template>
  <i :class="`material-icons${iconType}`" :style="`font-size: ${size}`">
    {{ iconName }}
  </i>
</template>
