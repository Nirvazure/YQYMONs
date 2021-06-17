import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import animate from "animate.css";
import filter from "@/filter.js"; //引入全局过滤器
import store from './store'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use(animate);

Object.keys(filter).forEach((key) => Vue.filter(key, filter[key])); //注册全局过滤器

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')