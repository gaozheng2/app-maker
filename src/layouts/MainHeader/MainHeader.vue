<!--  【主页面布局】/【平台标题栏】  -->
<script setup lang="ts">
import {config} from '@/config/main.config'
</script>

<template>
  <el-header :height="`${config.headerHeight}px`" class="bg-header-bg">
    Header
  </el-header>
</template>
