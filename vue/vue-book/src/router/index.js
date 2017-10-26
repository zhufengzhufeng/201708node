import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
/*import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Add from '../components/Add.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';*/
// 组件可以支持异步写法 携程一个函数 函数返回一个promise对象
/*let Home = () => Promise.resolve({})*/
// coding split
// webpack 2+ 提供的 分开打包 实现动态加载组件 可以通过npm run build 看下打包的结果
export default new Router({
  routes: [
    {path:'',component:()=>import('../components/Home.vue')}, //默认路由
    {path:'/home',component:()=>import('../components/Home.vue')},
    {path:'/list',component:()=>import('../components/List.vue')},
    {path:'/add',component:()=>import('../components/Add.vue')},
    {path:'/collect',component:()=>import('../components/Collect.vue')},
    {path:'/detail/:id',component:()=>import('../components/Detail.vue'),name:'detail'},
    {path:'*',redirect:'/home'} // 路由的重定向
  ]
})
