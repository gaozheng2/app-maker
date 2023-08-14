<!--  【主页面布局】/【平台标题栏】  -->
<script setup lang="ts">
import MainHeaderTabs from '@/layouts/MainHeader/MainHeaderTabs.vue'
import {config} from '@/config/main.config'
import imgUrl from '/logo.svg'
</script>

<template>
  <el-header :height="`${config.headerHeight}px`"
             class="flex items-center justify-between
             bg-gradient-to-r from-header-bg to-header-bg2 text-header duration-300">
    
    <!--  Logo和平台名称  -->
    <div class="flex items-center cursor-pointer" @click="$router.push('/')">
      <el-image :src="imgUrl"
                class="w-7 h-7 mr-4 hover:brightness-110 drop-shadow" alt="logo"/>
      <h3 class="text-header">{{ config.title }}</h3>
    </div>
    
    <!--  一级菜单 Tabs  -->
    <MainHeaderTabs/>
    
    <!--  用户信息  -->
    管理员
  </el-header>
</template>
