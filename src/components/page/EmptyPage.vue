<!--  【通用页面】/【空白页面（用于展示建设中的应用）】  -->
<script setup lang="ts">
import {useRoute} from 'vue-router'

const route = useRoute()
console.log(route.params)
</script>

<template>
  <h1>建设中...</h1>
  {{ $route }}
</template>

<style scoped lang="scss">

</style>
