<script setup lang="ts">

import {ref} from 'vue'

const code1 = `<EBtn icon="add">新增</EBtn>
<EBtn type="default">取消</EBtn>
<EBtn type="success">成功</EBtn>
<EBtn type="warning">警告</EBtn>
<EBtn type="danger">错误</EBtn>`


const code2 = `<EBtn plain icon="add">新增</EBtn>
<EBtn plain type="default">取消</EBtn>
<EBtn plain type="success">成功</EBtn>
<EBtn plain type="warning">警告</EBtn>
<EBtn plain type="danger">错误</EBtn>`

// 点击查看源代码
const isShowCode = ref(false)
const isShowCode2 = ref(false)
</script>

<template>
  <AppPage title="按钮组件" icon="smart_button">
    <div class="w-[600px] border border-line rounded mb-8">
      
      <div class="px-4 py-2 flex justify-between items-center border-b border-line">
        <h6>基本样式</h6>
        <EBtnIcon name="code" tooltip="源代码" @click="isShowCode = !isShowCode"/>
      </div>
      
      <div v-show="isShowCode" class="border-b border-line">
        <CodePanel :code="code1" lang="html" class="w-full rounded-none"/>
      </div>
      
      <div class="p-5 flex gap-4">
        <EBtn icon="add">新增</EBtn>
        <EBtn type="default">取消</EBtn>
        <EBtn type="success">成功</EBtn>
        <EBtn type="warning">警告</EBtn>
        <EBtn type="danger">错误</EBtn>
      </div>
    
    </div>
    
    
    <div class="w-[600px] border border-line rounded">
      
      <div class="px-4 py-2 flex justify-between items-center border-b border-line">
        <h6>Plain 样式</h6>
        <EBtnIcon name="code" tooltip="源代码" @click="isShowCode2 = !isShowCode2"/>
      </div>
      
      <div v-show="isShowCode2" class="border-b border-line">
        <CodePanel :code="code2" lang="html" class="w-full rounded-none"/>
      </div>
      
      <div class="p-5 flex gap-4">
        <EBtn plain icon="add">新增</EBtn>
        <EBtn plain type="default">取消</EBtn>
        <EBtn plain type="success">成功</EBtn>
        <EBtn plain type="warning">警告</EBtn>
        <EBtn plain type="danger">错误</EBtn>
      </div>
    
    </div>
  </AppPage>
</template>
