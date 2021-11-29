import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入初始化和公共样式
import './assets/css/Normakize.css'
import './assets/css/common.css'
// 引入ElementUI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入axios
import axios from 'axios'
// 引入nprogress实现请求loading
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置axios
axios.defaults.baseURL = 'http://localhost:8080/pzxy/'
// axios请求拦截器
axios.interceptors.request.use(
  config => {
    NProgress.start() // 设置加载进度条(开始..)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// axios响应拦截器
axios.interceptors.response.use(
  function(response) {
    NProgress.done() // 设置加载进度条(结束..)
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)

// 全局挂载axios方法
Vue.prototype.$http = axios

// 关闭生产提示
Vue.config.productionTip = false
// 应用element
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
