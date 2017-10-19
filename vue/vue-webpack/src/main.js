import Vue from 'vue'; // runtime不支持template
import App from './App.vue'; //根组件

// 引入第三方模块是时如果引入的文件不是默认main对应的需要将路径写全
import 'bootstrap/dist/css/bootstrap.css';
import router from './router'
new Vue({ // 创建实例
    el:'#app',
    render:h=>h(App), //用根实例替换掉app
    router // this.$route属性  this.$router 方法
});