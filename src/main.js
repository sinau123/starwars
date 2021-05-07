import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueProgressBar from '@aacassandra/vue3-progressbar'
import { createPinia } from 'pinia'

const options = {
  color: '#363636',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  inverse: false,
  autoFinish: false,
}

const app = createApp(App)

app.use(VueProgressBar, options).use(router).use(createPinia()).mount('#app')
