<!--  【通用页面】/【应用页面框架】  -->
<script setup lang="ts">

</script>

<template>
  <main class="p-5 flex flex-col">
    
    <!--  页面标题  -->
    <h2 class="my-4 flex items-center">
      <slot name="title">
        页面标题
      </slot>
    </h2>
    
    <slot/>
  </main>
</template>
