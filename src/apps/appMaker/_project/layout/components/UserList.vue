<!--  【自定义布局】/【用户下拉列表】  -->
<script setup lang="ts">
import EDropdownItem from '@/components/common/EDropdownItem.vue'
import {useUserStore} from '@/stores/userStore'


// 模拟用户列表
interface UserListItem {
  id: number
  role: string
  avatar: string
}

const mockUserList: UserListItem[] = [
  {id: 1, role: '管理员', avatar: '1-11'},
  {id: 2, role: 'App管理员', avatar: '1-2'},
  {id: 3, role: '风险管理员', avatar: '0-7'},
]


// 点击用户列表项
const userStore = useUserStore()
const onClickUser = (item: UserListItem) => {
  userStore.$patch({
    userId: item.id,
    userName: item.role,
    userAvatar: item.avatar,
  })
}
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
