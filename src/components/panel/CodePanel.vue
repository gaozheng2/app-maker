<!--【Element 通用组件】/【代码面板】-->
<script setup lang="ts">
import {onMounted, ref} from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'  //高亮主题
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'  //行号插件
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css'
import {useClipboard} from '@vueuse/core'  //行号插件的样式

const props = withDefaults(defineProps<{
  code: string,  // 代码内容
  lang?: string  // 代码语言
  line?: boolean // 是否显示行号
}>(), {
  lang: 'js'
})


onMounted(() => {
  Prism.highlightAll()
})


// 点击复制按钮
const {copy} = useClipboard()
const isCopied = ref(false)

const onClickCopy = () => {
  copy(props.code)
  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 1500)
}
</script>

<template>
  <div class="relative w-96 bg-neutral-800 rounded">
    <el-scrollbar class="h-[400px]">
      <pre>
          <code :class="`language-${lang}`">
{{ code }}
          </code>
      </pre>
    </el-scrollbar>
    
    <!--  拷贝按钮  -->
    <div class="absolute right-2 bottom-2 flex items-center gap-2">
        <span class="text-xs text-third opacity-0 duration-500"
              :class="{ 'opacity-100': isCopied }">
          已复制
        </span>
      <EBtnIcon name="content_copy" class="text-third" @click="onClickCopy"/>
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
