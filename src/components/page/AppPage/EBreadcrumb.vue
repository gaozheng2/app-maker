<!--  【应用页面组件】/【面包屑】  -->
<script setup lang="ts">

</script>

<template>
  <div class="flex items-center text-xs text-second">
    <template v-for="(route,index) in $route.matched" :key="route.fullpath">
      <!--  第一个使用 home 图标  -->
      <EIcon v-if="index === 0" name="home" size="14px" class="cursor-pointer hover:text-primary"
             @click="$router.push('/')"/>
      
      <!--  其他的使用文字链接  -->
      <span v-else-if="index < $route.matched.length - 1" class="cursor-pointer hover:text-primary"
            @click="$router.push({ name: route.name })">
        {{ route.meta.title }}
      </span>
      
      <!--  最后一个没有链接  -->
      <span v-else>
        {{ route.meta.title }}
      </span>
      
      <!--  间隔图标，最后一个面包屑后没有图标  -->
      <EIcon v-if="index < $route.matched.length - 1" name="chevron_right"/>
    </template>
  </div>
</template>
