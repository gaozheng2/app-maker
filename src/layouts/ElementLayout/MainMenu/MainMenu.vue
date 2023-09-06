<!--  【Element 主页面布局】/【平台菜单栏】  -->
<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useMagicKeys, whenever} from '@vueuse/core'
import {mainConfig} from '@/config/main.config'


// 获取当前项目配置
const {currentProject} = mainConfig


// 监听路由变化，激活对应的菜单项，判断是否保持折叠状态，计算菜单栏标题，计算当前模块下的应用列表
const $route = useRoute()
const activeIndex = ref('')     // 当前激活的菜单项
const isCollapsed = ref(false)  // 是否折叠菜单栏
const isAlwaysMini = ref(false) // 是否始终保持折叠状态
const menuTitle = ref('')       // 菜单栏标题
const appList = ref<AppListItemType[]>([])

watch(() => $route.fullPath, () => {
  const module = $route.matched[1]  // 获取模块路由
  const app = $route.matched[2]     // 获取应用路由
  
  activeIndex.value = app?.name as string  // 激活对应的菜单项
  isAlwaysMini.value = !!module?.meta?.miniMenu  // 判断菜单栏是否保持折叠状态
  isCollapsed.value = isAlwaysMini.value  // 如果模块设置为始终保持折叠状态，则菜单栏始终为折叠状态
  menuTitle.value = module?.meta?.title as string  // 计算菜单栏标题
  
  // 计算当前模块下的应用列表
  const moduleData = currentProject?.appList?.find((item: AppListItemType) => item?.name === module?.name)
  appList.value = moduleData?.children || []
}, {immediate: true})


// 点击菜单项，跳转到对应的路由
const $router = useRouter()
const onClickMenuItem = (item: AppListItemType) => {
  if (item.type === 'app') {
    $router.push({name: item.name})
  }
}


// 折叠菜单栏，快捷键 Alt+W
const keys = useMagicKeys()

whenever(keys.alt_w, () => {
  if (isAlwaysMini.value) return  // 如果菜单栏设置为始终保持折叠状态，则不展开
  isCollapsed.value = !isCollapsed.value
})


// 计算菜单栏滚动条高度
const menuHeight = computed(() => {
  return `calc(100vh - ${(currentProject?.style.headerHeight ?? 0) + 48}px)`
})
</script>

<template>
  <el-aside :width="`${currentProject?.style.menuWidth}px` ?? '300px'"
            class="select-none">
    
    <el-menu
      unique-opened
      :collapse="isCollapsed"
      class="!bg-menu-bg "
    >
      
      <!--  菜单栏标题  -->
      <div v-if="!isAlwaysMini" class="h-12 px-4 flex justify-between items-center border-b border-line">
        <div v-if="!isCollapsed" class="flex items-center">
          <!--          <EIcon name="settings" size="20px" class="mr-2 text-primary"/>-->
          <h4 class="whitespace-nowrap">{{ menuTitle }}</h4>
        </div>
        <!--  折叠菜单按钮  -->
        <EIcon button name="menu_open" size="22px" class="ml-1"
               :class="{ 'rotate-180': isCollapsed}"
               :tooltip="(isCollapsed ? '展开' : '折叠') + ' (Alt+W)'"
               tooltip-placement="right"
               @click="isCollapsed = !isCollapsed"/>
      </div>
      
      <el-scrollbar class="pl-1 pr-3" :style="`height: ${menuHeight}`">
        <template v-for="item in appList" :key="item.name">
          
          <!--  应用组标题  -->
          <div v-if="item.type === 'group' && !isCollapsed" class="mt-4 pl-4 text-second text-sm font-bold">
            <span class="whitespace-nowrap">{{ item.title }}</span>
          </div>
          
          <!--  应用项  -->
          <el-menu-item v-else-if="item.type === 'app'"
                        :index="item.name" :route="{ name: item.name }"
                        class="!h-10 my-2 ml-2 rounded duration-300
                               hover:!bg-transparent hover:text-primary"
                        :class="{ 'active': activeIndex === item.name }"
                        @click="onClickMenuItem(item)"
          >
            <!--  应用图标  -->
            <EIcon :name="item.icon!" :size="item.iconSize ?? '20px'" class="mr-4 -ml-2.5"
                   :tooltip="item.title" tooltip-placement="right"/>
            
            <!--  应用标题  -->
            <span class="whitespace-nowrap">{{ item.title }}</span>
          </el-menu-item>
        </template>
      
      </el-scrollbar>
    </el-menu>
  </el-aside>
</template>

<style scoped lang="scss">
:deep(.el-menu) {
  // 激活菜单项的样式
  .el-menu-item.active {
    @apply bg-menu-active-bg text-menu-active-text font-bold #{!important};
  }
  
  // 避免 Element UI 的样式覆盖
  .el-menu-item.is-active {
    @apply text-default;
  }
}
</style>
