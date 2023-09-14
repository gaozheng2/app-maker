<script setup lang="ts">
const code1 = `<template>
  <EBtn icon="add">新增</EBtn>
  <EBtn type="default">取消</EBtn>
  <EBtn type="success">成功</EBtn>
  <EBtn type="warning">警告</EBtn>
  <EBtn type="danger">错误</EBtn>
</template>`


const code2 = `<template>
  <EBtn plain icon="add">新增</EBtn>
  <EBtn plain type="default">取消</EBtn>
  <EBtn plain type="success">成功</EBtn>
  <EBtn plain type="warning">警告</EBtn>
  <EBtn plain type="danger">错误</EBtn>
</template>`


const tableData = [
  {
    name: 'icon',
    desc: '按钮图标',
    type: 'string',
    options: '',
    default: '',
  },
  {
    name: 'iconSize',
    desc: '按钮图标大小',
    type: 'string',
    options: '',
    default: '18px',
  },
  {
    name: 'tooltip',
    desc: '鼠标悬浮提示文字',
    type: 'string',
    options: '',
    default: '',
  },
  {
    name: 'tooltipPlacement',
    desc: '提示文字显示位置',
    type: 'string',
    options: 'top | left | right | bottom',
    default: 'top',
  },
]

// icon?: string,      // 按钮图标
//   iconSize?: string,  // 按钮图标大小
//   tooltip?: string,   // 按钮提示文字
//   tooltipPlacement?: 'top' | 'left' | 'right' | 'bottom'
</script>

<template>
  <AppPage title="按钮组件" icon="smart_button">
    
    <h3 class="my-4">API</h3>
    <div class="w-[800px] mb-6">
      <el-table :data="tableData">
        <el-table-column prop="name" label="属性名" width="180"/>
        <el-table-column prop="desc" label="说明" width="280"/>
        <el-table-column prop="type" label="类型"/>
        <el-table-column prop="options" label="可选值"/>
        <el-table-column prop="default" label="默认值"/>
      </el-table>
    </div>
    
    <h3 class="my-4">应用示例</h3>
    <div class="gap-y-8">
      <ExamplePanel title="基本样式" :code="code1" lang="html">
        <div class="flex gap-4">
          <EBtn icon="add">新增</EBtn>
          <EBtn type="default">取消</EBtn>
          <EBtn type="success">成功</EBtn>
          <EBtn type="warning">警告</EBtn>
          <EBtn type="danger">错误</EBtn>
        </div>
      </ExamplePanel>
      
      <ExamplePanel title="Plain 样式" :code="code2" lang="html">
        <div class="flex gap-4">
          <EBtn plain icon="add">新增</EBtn>
          <EBtn plain type="default">取消</EBtn>
          <EBtn plain type="success">成功</EBtn>
          <EBtn plain type="warning">警告</EBtn>
          <EBtn plain type="danger">错误</EBtn>
        </div>
      </ExamplePanel>
    </div>
  </AppPage>
</template>
