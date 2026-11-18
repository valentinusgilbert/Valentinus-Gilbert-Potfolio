import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import reveal from './directives/reveal'

const app = createApp(App)
app.directive('reveal', reveal)
app.mount('#app')
