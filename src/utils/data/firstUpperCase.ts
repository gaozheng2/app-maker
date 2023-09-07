// 【工具函数】/【数据】/【首字母大写】

const firstUpperCase = (str: string) => {
  return str.replace(/^\S/, s => s.toUpperCase())
}


export {firstUpperCase}
