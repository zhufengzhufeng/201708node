
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  el: '#app',
  router,
  ...App //将App组件展开放到根实例上
  // render:(h)=>h(App)
});
