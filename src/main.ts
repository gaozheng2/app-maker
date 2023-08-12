import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/style/index.scss'  // 自定义样式
import 'element-plus/dist/index.css'  // element-plus 样式


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
