import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Google Fonts */
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'

createApp(App)
.use(router)
.mount('#app')
