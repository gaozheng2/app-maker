<script setup lang="ts">
import type {Ref} from 'vue'
import {inject, onMounted, ref} from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'  //高亮主题
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'  //行号插件
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css'
import {useClipboard} from '@vueuse/core'  //行号插件的样式


const projectData = inject<Ref<ProjectConfigType>>('projectData')

const formData = projectData?.value

onMounted(() => {
  Prism.highlightAll()
})


const input = ref('const baseConfig: ProjectBaseConfigType = {\n' +
  '  configVersion: \'1.0\',\n' +
  '  name: \'AppMaker\',\n' +
  '  title: \'应用开发平台\',\n' +
  '  description: \'用于快速开发微应用的脚手架，基于 Vue3 + Vite4 + Ts + Tailwindcss + Element-plus 构建\',\n' +
  '  version: \'0.0.1\',\n' +
  '  logoUrl: \'./assets/logo.svg\',\n' +
  '}')


// 点击复制按钮
const {copy} = useClipboard()
const isCopied = ref(false)

const onClickCopy = () => {
  copy(input.value)
  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 1500)
}
</script>

<template>
  <div class="h-full flex">
    <div class="w-1/2 pr-6">
      <el-form :model="formData" label-width="80" class="demo-form-inline">
        <el-form-item label="项目名称">
          <el-input v-model="formData.name" placeholder="" clearable/>
        </el-form-item>
        <el-form-item label="项目标题">
          <el-input v-model="formData.title" placeholder="" clearable/>
        </el-form-item>
        <el-form-item label="项目描述">
          <el-input type="textarea" :rows="3" v-model="formData.description" placeholder="" clearable/>
        </el-form-item>
        <el-form-item label="版本号">
          <el-input v-model="formData.version" placeholder="" clearable/>
        </el-form-item>
        <el-form-item label="Logo 路径">
          <el-input v-model="formData.logoUrl" placeholder="" clearable/>
        </el-form-item>
      </el-form>
    </div>
    
    <div class="relative w-96 bg-neutral-800 rounded">
      <el-scrollbar class="h-[400px]">
      <pre>
          <code class="language-js">
{{ input }}
          </code>
      </pre>
      </el-scrollbar>
      
      <!--  拷贝按钮  -->
      <div class="absolute right-2 bottom-1 flex items-center gap-2">
        <span class="text-third opacity-0 duration-500"
              :class="{ 'opacity-100': isCopied }">
          已复制
        </span>
        <EBtnIcon name="content_copy" class="text-third" @click="onClickCopy"/>
      </div>
    </div>
  
  </div>
</template>

<style scoped lang="scss">
// 设置代码块高度和背景色
pre {
  @apply h-full bg-transparent;
  white-space: pre-wrap;
  overflow: hidden;
}
</style>
