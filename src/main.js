import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icons/index'
//导入ant-design-vue组件库
import Antd from 'ant-design-vue'
//导入组件样式表
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

//安装组件库
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
