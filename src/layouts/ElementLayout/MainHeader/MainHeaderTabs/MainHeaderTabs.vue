<!--  【平台标题栏】/【一级菜单 Tabs】  -->
<script setup lang="ts">
/**
 * 获取当前项目配置 currentProject 中的应用列表 appList 属性，
 * 自动根据其中的一级菜单生成 Tabs 数据
 */
import {ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import {mainConfig} from '@/config/main.config'

const $route = useRoute()


// 获取当前项目配置
const {currentProject} = mainConfig

// Tabs 数据
const tabsData = currentProject!.appList!


// 点击 Tab 时，更新激活项
const activeIndex = ref(tabsData[0].name)
const onClickTab = (index: string) => {
  activeIndex.value = index
}


// 监听路由变化，激活对应的 Tab
watch(() => $route.fullPath, () => {
  const tab = $route.matched[1]  // 获取一级菜单路由
  
  if (tab) {
    activeIndex.value = tab.name
  }
}, {immediate: true})
</script>

<template>
  <!--  Tabs 容器 -->
  <div class="relative w-full h-full pb-px flex justify-between items-center text-header">
    
    <!--  Tabs 列表，分为左中右三个区域  -->
    <div class="h-full flex items-center">
      <template v-for="item in currentProject?.appList?.filter(app => app.align === 'left')" :key="item.label">
        <MainHeaderTabItem :item-data="item" :active="activeIndex === item.name" @click-tab="onClickTab"/>
      </template>
    </div>
    
    <div class="h-full flex items-center">
      <template v-for="item in currentProject?.appList?.filter(app => !app.align || app.align === 'center')"
                :key="item.label">
        <MainHeaderTabItem :item-data="item" :active="activeIndex === item.name" @click-tab="onClickTab"/>
      </template>
    </div>
    
    <div class="h-full flex items-center">
      <template v-for="item in currentProject?.appList?.filter(app => app.align === 'right')" :key="item.label">
        <MainHeaderTabItem :item-data="item" :active="activeIndex === item.name" @click-tab="onClickTab"/>
      </template>
    </div>
  </div>
</template>
