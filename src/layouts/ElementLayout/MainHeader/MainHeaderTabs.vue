<!--  【平台标题栏】/【一级菜单 Tabs】  -->
<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import {useElementBounding} from '@vueuse/core'
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


// 激活项变化时，更改下方标识条的宽度和位置，并跳转到对应的路由
const refTabWrapper = ref<HTMLElement | null>(null)

onMounted(() => {
  watch(activeIndex, (index) => {
    const tab = tabsData.find(item => item.name === index)
    
    if (tab) {
      const el = refTabWrapper.value?.querySelector('.active') as HTMLElement
      
      if (el) {
        const indicator = refTabWrapper.value?.querySelector('.indicator') as HTMLElement
        
        // 使用 VueUse 的 useElementBounding  监听激活项的 left 和 width，变化时动态更新标识条的宽度
        if (indicator) {
          const {left: activeLeft, width: activeWidth} = useElementBounding(el)
          
          watch([activeLeft, activeWidth], () => {
            const wrapperLeft = refTabWrapper.value?.getBoundingClientRect().left
            const left = activeLeft.value - (wrapperLeft ?? 0)
            indicator.style.left = `${left}px`
            indicator.style.width = `${activeWidth.value}px`  // 32px 为左右 padding 值
          }, {immediate: true})
        }
      }
    }
  }, {immediate: true, flush: 'post'})  // flush:post 等待 DOM 更新后，再执行 watch
})


// 监听路由变化，激活对应的 Tab
watch(() => $route.name, (name) => {
  const tab = tabsData.find(item => item.to === name)
  if (tab) {
    activeIndex.value = tab.name
  }
})
</script>

<template>
  <!--  Tabs 容器 -->
  <div ref="refTabWrapper" class="relative w-full h-full mx-5 pb-px flex justify-between items-center text-header">
    
    <!--  Tabs 列表，分为左中右三个区域  -->
    <div class="h-full flex items-center">
      <template v-for="item in currentProject?.appList?.filter(item => item.align === 'left')" :key="item.label">
        <MainHeaderTabItem :item-data="item" :active="activeIndex === item.name" @click-tab="onClickTab"/>
      </template>
    </div>
    
    <div class="h-full flex items-center">
      <template v-for="item in currentProject?.appList?.filter(item => !item.align || item.align === 'center')"
                :key="item.label">
        <MainHeaderTabItem :item-data="item" :active="activeIndex === item.name" @click-tab="onClickTab"/>
      </template>
    </div>
    
    <div class="h-full flex items-center">
      <template v-for="item in currentProject?.appList?.filter(item => item.align === 'right')" :key="item.label">
        <MainHeaderTabItem :item-data="item" :active="activeIndex === item.name" @click-tab="onClickTab"/>
      </template>
    </div>
    
    <!--  激活项下方标识条  -->
    <div class="indicator absolute bottom-px left-0 w-[54px] h-0.5 bg-header duration-300 ease-in-out"/>
  </div>
</template>
