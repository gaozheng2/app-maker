<!--【应用开发平台】/【工作台 App】-->
<script setup lang="ts">

</script>

<template>
  <h1 class="text-primary/50">工作台</h1>
  <div class="m-4 flex gap-2" v-for="i in 40">
    <el-button type="primary" link>Primary</el-button>
    <el-button plain>Primary</el-button>
    <EBtn type="primary" icon="add">
      新增会议
    </EBtn>
    <EBtn type="success" tooltip="成功">Success</EBtn>
    <EBtn type="warning" tooltip="警告" tooltip-placement="bottom">Warning</EBtn>
    <EBtn type="danger">Danger</EBtn>
    <EBtn type="info">Info</EBtn>
  </div>
</template>

<style scoped lang="scss">

</style>
