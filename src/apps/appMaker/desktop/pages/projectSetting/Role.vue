<script setup lang="ts">
import type {Ref} from 'vue'
import {inject, ref} from 'vue'
import CodePanel from '@/components/panel/CodePanel.vue'


const projectData = inject<Ref<ProjectConfigType>>('projectData')

const formData = projectData?.value


const code = ref('const baseConfig: ProjectBaseConfigType = {\n' +
  '  configVersion: \'1.0\',\n' +
  '  name: \'AppMaker\',\n' +
  '  title: \'应用开发平台\',\n' +
  '  description: \'用于快速开发微应用的脚手架，基于 Vue3 + Vite4 + Ts + Tailwindcss + Element-plus 构建\',\n' +
  '  version: \'0.0.1\',\n' +
  '  logoUrl: \'./assets/logo.svg\',\n' +
  '}')
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
    
    <CodePanel :code="code"/>
  </div>
</template>
