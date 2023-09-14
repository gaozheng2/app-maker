<!--【Element 通用组件】/【对话框】/【设置对话框】-->
<script setup lang="ts">
import {ref, watch} from 'vue'

// 菜单项数据类型
interface menuType {
  name: string,       // 菜单项名称
  title: string,      // 菜单项标题
  icon: string,       // 菜单项图标
  component?: any,    // 菜单项组件
}

const props = withDefaults(defineProps<{
  title?: string,       // 侧边栏标题
  subtitle?: string,    // 侧边栏副标题
  subtitleIcon?: string // 侧边栏副标题图标
  menuData: menuType[], // 菜单栏数据
}>(), {
  title: '设置',
  subtitle: '设置',
})


// 对话框图标和标题
const dialogIcon = ref('')
const dialogTitle = ref('')


// 点击菜单项，切换对话框图标和标题
const myComponent = ref<any>(null)

const activeMenu = ref(props.menuData[0])

const onClickMenu = (menu: menuType) => {
  activeMenu.value = menu
}

watch(activeMenu, () => {
  const menu = props.menuData.find(item => item.name === activeMenu.value.name)
  if (menu) {
    dialogIcon.value = menu.icon
    dialogTitle.value = menu.title
    
    myComponent.value = menu.component
  }
}, {immediate: true})


console.log('props.menuData', props.menuData)
</script>

<template>
  <EDialog size="lg" has-sidebar :icon="dialogIcon" :title="dialogTitle">
    
    <!--  左侧菜单栏  -->
    <template #sidebar>
      <div
        class="relative w-full h-full flex flex-col flex-nowrap bg-header-bg select-none overflow-hidden
               dark:bg-panel-bg ">
        
        <!--  副标题  -->
        <div class="p-4 mb-4">
          <div class="flex items-center flex-nowrap mb-2 opacity-80 whitespace-nowrap">
            <EIcon v-if="subtitleIcon" :name="subtitleIcon" size="16px" class="text-header mr-2"/>
            <h6 class="text-header">{{ subtitle }}</h6>
          </div>
          
          <!--  插槽：主标题  -->
          <div class="flex items-center whitespace-nowrap">
            <slot name="title">
              <h4 class="text-header">{{ title }}</h4>
            </slot>
          </div>
        </div>
        
        <!--  菜单项  -->
        <el-scrollbar>
          <template v-for="menu in menuData" :key="menu.name">
            <div class="w-full h-12 pl-8 flex items-center cursor-pointer hover:bg-white/10 whitespace-nowrap"
                 :class="{ 'bg-white/10': activeMenu.name === menu.name }"
                 @click="onClickMenu(menu)">
              
              <EIcon :name="menu.icon" size="16px" class="text-header mr-4"/>
              <h6 class="text-header dark:text-default">{{ menu.title }}</h6>
            
            </div>
          </template>
        </el-scrollbar>
        
        <!--  圆形图案  -->
        <div class="absolute -bottom-20 -left-28 w-64 h-64 bg-white/10 rounded-full dark:hidden"/>
        <div class="absolute -bottom-44 -right-16 w-72 h-72 bg-white/10 rounded-full dark:hidden"/>
      </div>
    
    </template>
    
    <!--  激活菜单项对应的组件，渲染在对话框的 default 插槽中  -->
    <component :is="myComponent"/>
  
  </EDialog>
</template>
