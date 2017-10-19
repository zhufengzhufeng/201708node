import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Profile from '../components/Profile.vue';
import AboutMe from '../components/AboutMe.vue';
import Introduce from '../components/Introduce.vue';
import Article from '../components/Article.vue';
Vue.use(VueRouter);
let router = new VueRouter({
    // profile/introduce  /profile/introduce
    //linkActiveClass:'l', //改名字
    //linkExactActiveClass:'e',
    routes:[
        // 默认路由
        {path:'',component:Home},
        {path:'/home',component:Home},
        {path:'/profile',component:Profile,children:[
            {path:'',component:Introduce},
            {path:'aboutme',component:AboutMe},
            {path:'introduce',component:Introduce}
        ]},
        // 形参有但是是随机的  /article/:id /article/2 => {id:4} = this.$route.params
        {path:'/article/:aid/:name',component:Article}
    ]
});
export default router;








/*
import Vue from 'vue'; //应为路由需要Vue所以在当前文件中要导入vue
import Router from 'vue-router';
// router-link router-view 可以在全局任何地方使用
Vue.use(Router); // 插件所有vue的插件需要use一下，use后默认会调用install方法
import Home from '../components/Home.vue';
import Profile from '../components/Profile.vue';
//默认导出路由实例
export default new Router({
    routes:[
        {path:'/home',component:Home},
        {path:'/profile',component:Profile},
    ]
});
*/
