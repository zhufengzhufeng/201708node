// Vue.prototype.$http = axios;
let vm = new Vue({
    el:'#app',
    created(){ //初始化数据 进行ajax调用
        this.getData();
    },
    data:{
        todos:[],
        todo:{ select:false, title:'' }
    },
    methods:{
        add(){
          this.todos.push(this.todo);
          this.todo = { select:false, title:'' };
        },
        remove(todo){
            this.todos = this.todos.filter(item=>item!==todo);
        },
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
    computed:{
        count(){ //count是根据数组中没有有选中的个数而来的、
           return this.todos.filter(item=>!item.select).length;
        }
    },
    watch:{},
});