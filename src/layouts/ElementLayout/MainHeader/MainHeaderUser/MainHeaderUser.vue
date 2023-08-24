<!--  【平台标题栏】/【用户头像和下拉菜单】  -->
<script setup lang="ts">
import type {DropdownInstance} from 'element-plus'
import {ref} from 'vue'
import {storeToRefs} from 'pinia'
import {useUserStore} from '@/stores/userStore'
import EDropdownItem from '@/components/menu/EDropdownItem.vue'

// 获取用户名称
let {userName} = storeToRefs(useUserStore())


// 展开用户下拉菜单
let isOpenUserMenu = ref(false)
const refDropdown = ref<DropdownInstance>()

const onToggleUserMenu = (visible: boolean) => {
  isOpenUserMenu.value = visible
}
</script>

<template>
  <div class="flex items-center cursor-pointer">
    
    <el-dropdown ref="refDropdown" trigger="click" placement="bottom-end" size="large"
                 @visible-change="onToggleUserMenu">
      <div class="ml-1 flex items-center no-wrap text-header">
        <!--  用户头像  -->
        <MainHeaderUserAvatar/>
        
        <!--  用户名  -->
        <span class="ml-2 mr-1 text-sm whitespace-nowrap">{{ userName }}</span>
        
        <!--  下拉菜单图标  -->
        <EIcon name="arrow_drop_down" size="24px" class=" duration-300"
               :class="{ 'rotate-180': isOpenUserMenu }"/>
      </div>
      
      <!--  下拉菜单  -->
      <template #dropdown>
        <!--  【插槽】下拉菜单列表  -->
        <el-dropdown-menu>
          <slot name="dropdown">
            <EDropdownItem icon="person" label="用户信息"/>
            <EDropdownItem icon="help_outline" label="系统帮助"/>
            <EDropdownItem icon="exit_to_app" label="退出系统" divided/>
          </slot>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
