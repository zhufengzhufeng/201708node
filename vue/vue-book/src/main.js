
import Vue from 'vue'
import App from './App'
import router from './router'
//导入swiper样式
require('swiper/dist/css/swiper.css');
//导入js
import VueAwesomeSwiper from 'vue-awesome-swiper'
//注册为插件
Vue.use(VueAwesomeSwiper);



new Vue({
  el: '#app',
  router,
  ...App //将App组件展开放到根实例上
  // render:(h)=>h(App)
});
