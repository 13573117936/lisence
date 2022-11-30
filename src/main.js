import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/resets.css'
// document.documentElement.style.fontSize = document.documentElement.clientWidth / 20 + 'px'

createApp(App).use(store).use(router).mount('#app')
