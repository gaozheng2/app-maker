<!--  【应用开发平台 项目自定义布局】  -->
<script setup lang="ts">
import MainHeaderDivider from '@/layouts/ElementLayout/MainHeader/MainHeaderUser/MainHeaderDivider.vue'
import UserList from './components/UserList.vue'
</script>

<template>
  <ElementLayout>
    <template #user>
      <!--  明/暗主题切换按钮  -->
      <EBtnTheme/>
      
      <!--  分割线  -->
      <MainHeaderDivider/>
      
      <!--  用户头像和下拉菜单  -->
      <UserList/>
    </template>
  </ElementLayout>
</template>
