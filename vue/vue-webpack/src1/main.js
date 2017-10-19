import Vue from 'vue'; //引入vuejs 因为vue是一个第三方模块，所以不需要./方式
// vue = runtime + compiler 如果只有runtime 体积会减少6kb
import App from './App.vue';
// 可以借助.vue文件来渲染
let vm = new Vue({
    el:'#app',
    // template:'<div>Hello</div>'
    render:h=>h(App)
    /*render:createElement=>{
        return createElement(App)
    }*/
});