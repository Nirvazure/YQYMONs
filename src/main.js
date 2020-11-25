import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import animate from "animate.css";
Vue.use(animate);
import filter from "@/filter.js"; //引入全局过滤器
Object.keys(filter).forEach((key) => Vue.filter(key, filter[key])); //注册全局过滤器
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')