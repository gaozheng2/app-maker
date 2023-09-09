<!--  【通用页面】/【应用页面框架】  -->
<script setup lang="ts">

</script>

<template>
  <main class="p-5 flex flex-col">
    <slot/>
    
    <!--  右上角操作按钮  -->
    <div>
      <EBtnIcon name="apps"/>
    </div>
  </main>
</template>
