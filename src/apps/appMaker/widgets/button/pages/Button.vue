<script setup lang="ts">
import MyComponent from '@/apps/appMaker/widgets/button/pages/MyComponent.vue'

const code1 = `<template>
  <EBtn icon="add">新增</EBtn>
  <EBtn type="default">取消</EBtn>
  <EBtn type="success">成功</EBtn>
  <EBtn type="warning">警告</EBtn>
  <EBtn type="danger">错误</EBtn>
  <EBtn type="info">信息</EBtn>
</template>`


const code2 = `<template>
  <EBtn plain icon="add">新增</EBtn>
  <EBtn plain type="default">取消</EBtn>
  <EBtn plain type="success">成功</EBtn>
  <EBtn plain type="warning">警告</EBtn>
  <EBtn plain type="danger">错误</EBtn>
  <EBtn plain type="info">信息</EBtn>
</template>`


const propsData = [
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
</script>

<template>
  <AppPage title="按钮组件" icon="smart_button">
    
    <div class="flex">
      <div>
        <h3 class="my-4">EBtn 组件 API</h3>
        
        <div class="w-[800px] mb-6">
          <el-table :data="propsData">
            <el-table-column prop="name" label="属性名" width="180"/>
            <el-table-column prop="desc" label="说明" width="280"/>
            <el-table-column prop="type" label="类型"/>
            <el-table-column prop="options" label="可选值"/>
            <el-table-column prop="default" label="默认值"/>
          </el-table>
        </div>
        
        
        <h3 class="my-4">应用示例</h3>
        
        <!--    <MyComponent/>-->
        
        <div class="gap-y-8">
          <ExamplePanel title="基本样式" :code="code1" lang="html">
            <div class="flex gap-4">
              <EBtn icon="add">新增</EBtn>
              <EBtn type="default">取消</EBtn>
              <EBtn type="success">成功</EBtn>
              <EBtn type="warning">警告</EBtn>
              <EBtn type="danger">错误</EBtn>
              <EBtn type="info">信息</EBtn>
            </div>
          </ExamplePanel>
          
          <ExamplePanel title="Plain 样式" :code="code2" lang="html">
            <div class="flex gap-4">
              <EBtn plain icon="add">新增</EBtn>
              <EBtn plain type="default">取消</EBtn>
              <EBtn plain type="success">成功</EBtn>
              <EBtn plain type="warning">警告</EBtn>
              <EBtn plain type="danger">错误</EBtn>
              <EBtn plain type="info">信息</EBtn>
            </div>
          </ExamplePanel>
        </div>
        
        
        <h3 id="link" class="my-4">相关链接</h3>
        
        <div>
          <el-link type="primary" href="https://element-plus.gitee.io/zh-CN/component/button.html" target="element">
            Element Plus - Button 组件
          </el-link>
        </div>
      </div>
      
      
      <!--  右侧导航栏  -->
      <div class="flex-1 pr-32 flex justify-end">
        <ul class="flex flex-col gap-2 text-sm text-second select-none">
          <li class="text-primary">1. EBtn 组件 API</li>
          <li class="cursor-pointer hover:text-primary">2. 应用示例</li>
          <li class="cursor-pointer hover:text-primary">3. 相关链接</li>
        </ul>
      </div>
    </div>
  </AppPage>
</template>
