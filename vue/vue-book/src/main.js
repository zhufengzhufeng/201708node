
import Vue from 'vue'
import App from './App'
import router from './router'
//导入swiper样式
require('swiper/dist/css/swiper.css');
//导入js
import VueAwesomeSwiper from 'vue-awesome-swiper'
//注册为插件
Vue.use(VueAwesomeSwiper);

import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2861488593,1651617597&fm=111&gp=0.jpg',
  loading: 'http://cdn.uehtml.com/201402/1392662520296_1140x0.gif',
  attempt: 1
});

import store from './vuex'
new Vue({
  el: '#app',
  router,
  store,
  ...App //将App组件展开放到根实例上
  // render:(h)=>h(App)
});
