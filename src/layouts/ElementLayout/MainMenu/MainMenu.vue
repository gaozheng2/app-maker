<!--  【Element 主页面布局】/【平台菜单栏】  -->
<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {mainConfig} from '@/config/main.config'

// 获取当前项目配置
const {currentProject} = mainConfig


// 计算菜单栏名称（模块名称）
const $route = useRoute()
const menuTitle = computed(() => {
  return $route.matched[1].meta.title
})


// 计算当前模块下的应用列表
const appList = computed<AppListItemType[]>(() => {
  const currentModule = $route.matched[1].name
  const module = currentProject?.appList.find((item: AppListItemType) => item.name === currentModule)
  return module?.children || []
})


// 监听路由变化，激活对应的菜单项
const activeIndex = ref('')
watch(() => $route.fullPath, () => {
  const app = $route.matched[2]  // 获取一级菜单路由
  activeIndex.value = app?.name as string
}, {immediate: true})


// 点击菜单项，跳转到对应的路由
const $router = useRouter()
const onClickMenuItem = (item: AppListItemType) => {
  if (item.type === 'app') {
    $router.push({name: item.name})
  }
}


// 计算菜单栏滚动条高度
const menuHeight = computed(() => {
  return `calc(100vh - ${currentProject?.style.headerHeight + 48}px)`
})
</script>

<template>
  <el-aside :width="`${currentProject?.style.menuWidth}px` ?? '300px'"
            class="bg-menu-bg border-r border-line">

    <!--  菜单栏标题  -->
    <div class="h-12 pl-4 flex items-center border-b border-line">
      <h4>{{ menuTitle }}</h4>
      <EIcon name="menu_open" size="22px" class="ml-2"/>
    </div>

    <el-scrollbar :style="`height: ${menuHeight}`">
      <el-menu
          unique-opened
          class="!border-r-0 px-3"
      >

        <template v-for="item in appList" :key="item.name">

          <!--  应用组标题  -->
          <div v-if="item.type === 'group'" class="mt-4 pl-4 text-second text-sm font-bold">
            {{ item.title }}
          </div>

          <!--  应用项  -->
          <el-menu-item v-else-if="item.type === 'app'"
                        :index="item.name" :route="{ name: item.name }"
                        class="!h-12 my-2 ml-2 rounded-md duration-300
                               hover:!bg-transparent hover:text-primary"
                        :class="{ 'active': activeIndex === item.name }"
                        @click="onClickMenuItem(item)"
          >
            <template #title>
              <span>{{ item.title }}</span>
            </template>

            <EIcon :name="item.icon" :size="item.iconSize ?? '20px'" class="mr-2"/>
          </el-menu-item>
        </template>

      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style scoped lang="scss">
// 激活菜单项的样式
:deep(.el-menu) {
  .el-menu-item.active {
    @apply bg-menu-active-bg text-menu-active-text font-bold #{!important};
  }

  // 避免 Element UI 的样式覆盖
  .el-menu-item.is-active {
    @apply text-default;
  }
}
</style>
