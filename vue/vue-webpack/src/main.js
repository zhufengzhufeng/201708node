import Vue from 'vue'; // runtime不支持template
import App from './App.vue';
// 引入router
import router from './router/index.js'
new Vue({
    el:'#app',
    render:h=>h(App),
    router
});