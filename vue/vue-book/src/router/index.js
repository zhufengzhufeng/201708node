import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Add from '../components/Add.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';
// coding split
export default new Router({
  routes: [
    {path:'',component:Home}, //默认路由
    {path:'/home',component:Home},
    {path:'/list',component:List},
    {path:'/add',component:Add},
    {path:'/collect',component:Collect},
    {path:'/detail/:id',component:Detail,name:'detail'},
    {path:'*',redirect:'/home'} // 路由的重定向
  ]
})
