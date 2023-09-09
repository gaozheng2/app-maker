<!--【Element 通用组件】/【全屏按钮】-->
<script setup lang="ts">
import {onActivated, onDeactivated, watch} from 'vue'
import {useFullscreen, useMagicKeys, whenever} from '@vueuse/core'
import {storeToRefs} from 'pinia'
import {useMainStore} from '@/stores/mainStore'


// 获取用于全屏的页面元素
const {isFullscreen} = storeToRefs(useMainStore())
const {isFullscreen: isFull, toggle} = useFullscreen()


// 数据仓库中的全屏状态与页面元素的全屏状态保持一致
watch(isFull, () => {
  isFullscreen.value = isFull.value
})


// 快捷键 Alt+Q
const keys = useMagicKeys()
let keyListener: () => void

onActivated(() => {
  keyListener = whenever(keys.alt_q, () => {
    toggle()
  })
})


// 组件失活时，注销快捷键
onDeactivated(() => {
  keyListener()
})
</script>

<template>
  <EBtnIcon :name="isFullscreen ? 'fullscreen_exit' : 'fullscreen'" size="18px"
            :tooltip="(isFullscreen ? '退出' : '') + '全屏 (Alt+Q)'"
            @click="toggle"/>
</template>
