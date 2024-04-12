import 'animate.css/animate.min.css'
// import { animate } from 'animate.css';
/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
// import animate from "animate.css";
import './assets/main.css'
import router from './router'


const app = createApp(App)

registerPlugins(app)

// app.use(animate)
app.use(router)

app.mount('#app')
