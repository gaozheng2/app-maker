<!--  【主页面路由】  -->
<script setup lang="ts">
import RouterPage from '@/components/page/RouterPage.vue'
import {ElConfigProvider} from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'  // 引入 Element 中文语言包
</script>

<template>
  <el-config-provider :locale="zhCn">
    <RouterPage/>
  </el-config-provider>
</template>
