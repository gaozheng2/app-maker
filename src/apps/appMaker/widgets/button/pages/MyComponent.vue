<script setup lang="ts">


// let file = readFileSync('./MyComponent.vue', 'utf-8')
import shaderString from './MyComponent.vue?raw'

let parser = new DOMParser()
let xmlDoc = parser.parseFromString(shaderString, 'text/html')
console.log(xmlDoc)

const codeScript = xmlDoc.getElementsByTagName('head')[0]?.childNodes[0]?.innerHTML
console.log(xmlDoc.getElementsByTagName('head'))

const codeTemplate = xmlDoc.getElementsByTagName('template')[0]?.innerHTML
console.log(xmlDoc.getElementsByTagName('template'))
</script>

<template>
  <CodePanel :code="codeScript" lang="js"></CodePanel>
  <CodePanel :code="codeTemplate" lang="html"></CodePanel>
</template>
