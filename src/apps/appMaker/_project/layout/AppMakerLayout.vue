<!--  【应用开发平台】/【项目自定义布局】  -->
<script setup lang="ts">
import '../assets/theme.scss'  // 引入项目自定义主题样式
import MainHeaderDivider from '@/layouts/ElementLayout/MainHeader/MainHeaderUser/MainHeaderDivider.vue'
import UserList from './components/UserList.vue'
import {useMainStore} from '@/stores/mainStore'
import {loadApps} from '@/apps/_appRegister/utils/loadApps'


// 读取全部应用，并保存到平台数据仓库中
const apps = loadApps()
const mainStore = useMainStore()
mainStore.$patch((state) => {
  state.apps = apps
})
</script>

<template>
  <ElementLayout>
    <!--  自定义用户下拉菜单插槽内容  -->
    <template #user>
      <!--  明/暗主题切换按钮  -->
      <EBtnTheme class="ml-2"/>
      
      <!--  分割线  -->
      <MainHeaderDivider/>
      
      <!--  用户头像和下拉菜单  -->
      <UserList/>
    </template>
  </ElementLayout>
</template>
