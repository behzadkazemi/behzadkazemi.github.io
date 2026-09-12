import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './i18n'
import './style.css'

const app = createApp(App)

app.use(createPinia()).use(router).use(i18n).mount('#app')
