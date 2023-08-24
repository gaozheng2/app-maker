<script setup lang="ts">
import {computed} from 'vue'
import {storeToRefs} from 'pinia'
import {useUserStore} from '@/stores/userStore'

// 获取用户头像
let {avatar} = storeToRefs(useUserStore())


// 组装头像对应的图片文件路径
const avatarImg = computed(() => {
  return new URL(`../../../../assets/images/avatar/${avatar?.value}.svg`, import.meta.url)?.href
})
</script>

<template>
  <el-image :src="avatarImg" alt="avatar" class="w-11 h-11"/>
</template>
