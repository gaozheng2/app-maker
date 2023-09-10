<!--【Element 通用组件】/【通用页面】/【纯路由页面】-->
<template>
  <router-view v-slot="{ Component }">
    <keep-alive :max="10">
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>
