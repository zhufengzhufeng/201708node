// Vue.prototype.$http = axios;
let vm = new Vue({
    el:'#app',
    created(){ //初始化数据 进行ajax调用
        this.getData();
    },
    data:{
        todos:[]
    },
    methods:{
        getData(){
            //1.实现列表渲染 2.实现删除功能  3.实现添加功能
            axios.get('./todo.json').then((res)=>{
                this.todos = res.data;
            },(err)=>{
                console.log(err);
            });
        }
    },
    filters:{},
    computed:{},
    watch:{},
});