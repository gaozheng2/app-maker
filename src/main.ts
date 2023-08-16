import App from './App.vue'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import router from './router'

import './assets/style/index.scss'  // 自定义样式


// 创建 Vue 应用，加载路由、状态管理等插件
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
