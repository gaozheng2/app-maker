<!--  【自定义布局】/【用户下拉列表】  -->
<script setup lang="ts">
import EDropdownItem from '@/components/common/EDropdownItem.vue'
import colors from 'tailwindcss/colors'  // 获取 Tailwind 颜色
import {useUserStore} from '@/stores/userStore'


// 模拟用户列表
interface UserListItem {
  id: number
  role: string
  avatar: string
  color?: string
}

const mockUserList: UserListItem[] = [
  {id: 1, role: '管理员', avatar: '1-11', color: colors.teal[500]},
  {id: 2, role: 'App管理员', avatar: '1-2', color: colors.lime[500]},
  {id: 3, role: '风险管理员', avatar: '0-7', color: colors.pink[500]},
]


// 点击用户列表项，更换用户名、头像、标题栏尾部颜色
const userStore = useUserStore()
const onClickUser = (item: UserListItem) => {
  userStore.$patch({
    userId: item.id,
    userName: item.role,
    userAvatar: item.avatar,
  })
  
  // 更换标题栏尾部颜色
  const style = document.documentElement.style
  style.setProperty('--color-header-bg2', item.color
    || style.getPropertyValue('--color-header-bg'))
  
  // TODO：更换暗黑模式下用户名称颜色
}


// 默认选中第一个用户
onClickUser(mockUserList[0])
</script>

<template>
  <MainHeaderUser>
    <template #dropdown>
      <!--  渲染模拟用户列表，显示在用户下拉菜单中  -->
      <template v-for="item in mockUserList" :key="item.id">
        <EDropdownItem icon="person" :label="item.role" @click="onClickUser(item)"/>
      </template>
    </template>
  </MainHeaderUser>
</template>
