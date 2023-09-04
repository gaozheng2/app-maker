<!--  【通用页面】/【纯路由页面】  -->
<template>
  <!--  支持子组件的 await 异步操作  -->
  <Suspense>
    <router-view v-slot="{ Component }">
      <keep-alive :max="10">
        <component :is="Component"/>
      </keep-alive>
    </router-view>
  </Suspense>
</template>
