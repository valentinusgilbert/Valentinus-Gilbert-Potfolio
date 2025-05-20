import './assets/main.scss'
import 'aos/dist/aos.css'
import AOS from 'aos'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 1200,
  once: true,
  offset: 100
})
