<!--  【平台标题栏】/【一级菜单 Tabs】  -->
<script setup lang="ts">
import {nextTick, onMounted, ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import {useRouter} from 'vue-router'

const $route = useRoute()
const $router = useRouter()


// Tabs 数据
const tabsData = [
  {index: '0', label: '', icon: 'home', to: '/'},
  {index: '1', label: '组件集', icon: 'extension', to: '/', size: '20px'},
  {index: '2', label: '应用预览', icon: 'apps', to: '/'},
  {index: '3', label: '应用开发', icon: 'code', to: '/'},
]

// 点击 Tab 时，更新激活项
const activeIndex = ref(tabsData[0].index)

const onTabClick = (index: string) => {
  activeIndex.value = index
}


// 激活项变化时，更改下方标识条的宽度和位置，并跳转到对应的路由
const refTabWrapper = ref<HTMLElement | null>(null)

onMounted(() => {
  // 避免页面刚加载时，标识条的位置不正确（因图标字体未读取，宽度有误），设置 300ms 延迟
  setTimeout(() => {
    watch(activeIndex, (index) => {
      const tab = tabsData.find(item => item.index === index)
      
      nextTick(() => {  // 等待 DOM 更新后，再获取元素位置
        if (tab) {
          const el = refTabWrapper.value?.querySelector('.active')
          if (el) {
            const wrapperLeft = refTabWrapper.value?.getBoundingClientRect().left
            const left = el.getBoundingClientRect().left - wrapperLeft
            const width = el.getBoundingClientRect().width
            const indicator = refTabWrapper.value?.querySelector('.indicator') as HTMLElement
            if (indicator) {
              indicator.style.left = `${left}px`
              indicator.style.width = `${width}px`
            }
          }
          $router.push(tab.to)
        }
      })
      
    })
  }, 300)
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
      <div class="relative h-full px-4 flex items-center justify-center cursor-pointer
                  hover:bg-white/10"
           :class="{ 'active': activeIndex === item.index }"
           @click="onTabClick(item.index)"
      >
        <EIcon :name="item.icon" :size="item.size ?? '22px'" class="text-xl"
               :class="{ 'mr-2': item.label.length > 0 }"/>
        <span class="text-sm">
          {{ item.label }}
        </span>
      </div>
    </template>
    
    <!--  激活项下方标识条  -->
    <div class="indicator absolute bottom-px left-0 w-[54px] h-0.5 bg-header duration-300"/>
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
