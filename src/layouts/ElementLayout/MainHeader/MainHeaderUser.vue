<!--  【平台标题栏】/【用户头像和下拉菜单】  -->
<script setup lang="ts">
import type {DropdownInstance} from 'element-plus'
import {computed, ref} from 'vue'
import {storeToRefs} from 'pinia'
import {useUserStore} from '@/stores/userStore'

// 获取用户信息和头像
let {userName, avatar} = storeToRefs(useUserStore())


// 展开用户下拉菜单
let isOpenUserMenu = ref(false)
const refDropdown = ref<DropdownInstance>()

const onClickUserMenu = (visible: boolean) => {
  isOpenUserMenu.value = visible
}


// 组装头像对应的图片文件路径
const avatarImg = computed(() => {
  return new URL(`../../../assets/images/avatar/${avatar?.value}.svg`, import.meta.url)?.href
})
</script>

<template>
  <div class="flex items-center cursor-pointer">
    
    <el-dropdown ref="refDropdown" trigger="click" placement="bottom-end" size="large"
                 @visible-change="onClickUserMenu">
      <div class="flex items-center no-wrap text-header">
        <!--  用户头像  -->
        <el-image :src="avatarImg" alt="avatar" class="w-11 h-11 ml-1 mr-2"/>
        
        <!--  用户名  -->
        <span class="mr-1 text-sm whitespace-nowrap">{{ userName }}</span>
        
        <!--  下拉菜单图标  -->
        <EIcon name="arrow_drop_down" size="24px" class=" duration-300"
               :class="{ 'rotate-180': isOpenUserMenu }"/>
      </div>
      
      <!--  下拉菜单  -->
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item class="flex">
            <EIcon name="person" size="22px" class="!mr-4"/>
            用户信息
          </el-dropdown-item>
          <el-dropdown-item>
            <EIcon name="help_outline" size="20px" class="!mr-4"/>
            系统帮助
          </el-dropdown-item>
          <el-dropdown-item divided>
            <EIcon name="exit_to_app" size="20px" class="!mr-4"/>
            退出系统
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  
  </div>
</template>
