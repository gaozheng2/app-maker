<!--【Element 通用组件】/【组件示例面板】-->
<script setup lang="ts">
// 是否显示源代码
import {ref} from 'vue'

const props = withDefaults(defineProps<{
  title: string,  // 标题
  code?: string,  // 代码内容
  lang?: string,  // 代码语言
  line?: boolean, // 是否显示行号
}>(), {
  lang: 'js'
})


// 是否显示源代码
const isShowCode = ref(false)
</script>

<template>
  <div class="w-[800px] border border-line rounded mb-8">
    
    <div class="px-4 py-2 flex justify-between items-center border-b border-line">
      <h6 class="text-second">{{ title }}</h6>
      <EBtnIcon name="code" tooltip="源代码" @click="isShowCode = !isShowCode"/>
    </div>
    
    <div v-if="code" v-show="isShowCode" class="border-b border-line">
      <CodePanel :code="code" :lang="lang" :line="line" class="w-full rounded-none"/>
    </div>
    
    <div class="p-5">
      <slot/>
    </div>
  
  </div>
</template>
