import { createApp } from 'vue'
import App from './App.vue'
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
import Antd from "ant-design-vue"
import store from './store'
import "./assets/tailwind.css"
import "./assets/style.css"
const app=createApp(App)
app.use(Antd)
app.use(store)
app.mount('#app')

