import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from "./components/common/toast";
// import './plugins/flexible.js'
// import './lib-flexible'
Vue.config.productionTip = false

Vue.prototype.$bus=new Vue //用vue实例做事件总线
//安装插件
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
