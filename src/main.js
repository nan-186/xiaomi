import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from './App.vue'
import env from './env'

//根据前端的跨域方式做调整 /a/b:/api/a/b =>/a/b
axios.defaults.baseURL = '/api';
axios.defaults.baseURL = 8000;
//根据环境变量获取不同的请求地址
axios.defaults.baseURl = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if (res.status = 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';    
  }else{
    alert(res.msg);
  }
})



Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
