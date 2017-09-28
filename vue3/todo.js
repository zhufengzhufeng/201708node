// Vue.prototype.$http = axios;
let vm = new Vue({
    el:'#app',
    created(){ //初始化数据 进行ajax调用
        this.getData();
    },
    data:{
        todos:[],
        todo:{ select:false, title:'' },
        cur:{}, //是用来比较的 只是一个值 用来判断是否显示输入框的
        newObj:{} //用来给输入框赋值的
    },
    methods:{
        cancel(){ //当取消的时候 cur清空 和任何人都比较为false 所以不显示输入框
            this.cur = {};
        },
        saveCurrent(todo){
            //浅拷贝 和 深拷贝
            Object.assign(this.newObj,todo); //为了让输入框的内容和span中相同 但是不是同一个。
            this.cur = todo;
            // 将todo克隆一份 给cur，和以前todo长的一样 但是没关系
        },
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
        },

    },
    watch:{},
});