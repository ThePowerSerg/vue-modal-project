// loaded first and creates the Vue object.
import { createApp } from 'vue'
// imports the Vue default component.
import App from './App.vue'

import './assets/global.css'

// injects the default component into the html app element. 
createApp(App).mount('#app')
