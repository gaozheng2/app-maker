<!--  【平台标题栏】/【一级菜单 Tabs】  -->
<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import {useRouter} from 'vue-router'

import {useElementSize} from '@vueuse/core'

const $route = useRoute()
const $router = useRouter()


// Tabs 数据
const tabsData = [
  {index: '0', label: '', icon: 'home', to: '/', size: '22px'},  // 可自定义图标大小，默认 20px
  {index: '1', label: '组件库', icon: 'extension', to: '/'},
  {index: '2', label: '应用预览', icon: 'widgets', to: '/'},
  {index: '3', label: '应用开发', icon: 'api', to: '/'},
]

// 点击 Tab 时，更新激活项
const activeIndex = ref(tabsData[0].index)

const onTabClick = (index: string) => {
  activeIndex.value = index
}


// 激活项变化时，更改下方标识条的宽度和位置，并跳转到对应的路由
const refTabWrapper = ref<HTMLElement | null>(null)
const refTabs = ref([])

onMounted(() => {
  watch(activeIndex, (index) => {
    const tab = tabsData.find(item => item.index === index)
    
    if (tab) {
      const el = refTabWrapper.value?.querySelector('.active') as HTMLElement
      if (el) {
        // 动态更新标识条的位置 left
        const wrapperLeft = refTabWrapper.value?.getBoundingClientRect().left
        const left = el.getBoundingClientRect().left - (wrapperLeft ?? 0)
        const width = el.getBoundingClientRect().width
        const indicator = refTabWrapper.value?.querySelector('.indicator') as HTMLElement
        if (indicator) {
          indicator.style.left = `${left}px`
          
          // 监听激活项的宽度，变化时动态更新标识条的宽度
          const {width: activeWidth} = useElementSize(el)
          const unWatch = watch(activeWidth, (width) => {
            console.log('activeWidth', width + 32)
            indicator.style.width = `${width + 32}px`  // 32px 为左右 padding 值
          }, {immediate: true})
        }
      }
      // 跳转到对应的路由
      $router.push(tab.to)
    }
  }, {immediate: true, flush: 'post'})  // flush:post 等待 DOM 更新后，再执行 watch
})


// 监听路由变化，激活对应的 Tab
watch(() => $route.path, (path) => {
  const tab = tabsData.find(item => item.to === path)
  if (tab) {
    activeIndex.value = tab.index
  }
})
</script>

<template>
  <!--  Tabs 容器 -->
  <div ref="refTabWrapper" class="relative h-full pb-px flex items-center justify-center text-header">
    
    <!--  Tabs 列表  -->
    <template v-for="item in tabsData" :key="item.label">
      <div ref="refTabs" class="relative h-full px-4 flex items-center justify-center cursor-pointer
                  hover:bg-white/10"
           :class="{ 'active': activeIndex === item.index }"
           @click="onTabClick(item.index)"
      >
        <EIcon :name="item.icon" :size="item.size ?? '20px'" class="text-xl"
               :class="{ 'mr-2': item.label.length > 0 }"/>
        <span class="text-sm">
          {{ item.label }}
        </span>
      </div>
    </template>
    
    <!--  激活项下方标识条  -->
    <div class="indicator absolute bottom-px left-0 w-[54px] h-0.5 bg-header duration-300 ease-in-out"/>
  </div>
</template>

<style scoped lang="scss">
// 激活项样式
.active {
  @apply bg-white/10;
  
  & span {
    @apply font-bold;
  }
}
</style>
