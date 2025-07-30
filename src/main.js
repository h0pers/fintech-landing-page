import './fonts/index.js'
import './index.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(AOS)
app.use(router)

app.mount('#app')
