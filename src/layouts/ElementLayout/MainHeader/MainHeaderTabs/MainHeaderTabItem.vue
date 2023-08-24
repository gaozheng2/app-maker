<!--  【平台标题栏】/【一级菜单 Tabs】/【Tab 项】  -->
<script setup lang="ts">
import {useRouter} from 'vue-router'

const props = defineProps<{
  itemData: AppListItemType,  // Tab 项数据
  active: boolean,  // 是否激活
}>()

const emit = defineEmits<{
  clickTab: [index: string],  // 点击 Tab 时，向上派发事件
}>()

const $router = useRouter()


// 点击 Tab 时，向上派发事件，并跳转到对应路由
const onTabClick = (item: AppListItemType) => {
  emit('clickTab', item.name)
  
  // 跳转到对应的路由，如果没有配置路由，则跳转到 empty 页面（应用建设中）
  try {
    $router.push({name: item.to ?? item.name})
  } catch (e) {
    console.error('路由跳转失败', e)
    $router.push({name: 'empty'})
  }
}
</script>

<template>
  <!--  只显示图标的情况下，鼠标悬浮才显示提示文字  -->
  <el-tooltip :content="itemData.title" placement="bottom" :disabled="!itemData.onlyIcon">
    <div ref="refTabs"
         class="relative h-full px-4 flex items-center justify-center cursor-pointer
                hover:bg-white/10"
         :class="{ 'active': active }"
         @click="onTabClick(itemData)"
    >
      <EIcon :name="itemData.icon" :size="itemData.iconSize ?? '20px'" class="text-xl"/>
      <span v-if="!itemData.onlyIcon" class="ml-2 text-sm whitespace-nowrap">
          {{ itemData.title }}
      </span>
    </div>
  </el-tooltip>
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
