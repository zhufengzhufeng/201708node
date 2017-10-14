// Vue.prototype.$http = axios;
let vm = new Vue({
    el:'#app',
    created(){ //初始化数据 进行ajax调用
        //如果localstorage中有数据 就取出来用 如果没有从json中获取
        let result = JSON.parse(localStorage.getItem('list'));
        if(result == null){
            this.getData();
        }else{
            this.todos = result;
        }
    },
    data:{
        todos:[],
        todo:{ select:false, title:'' },
        cur:{}, //是用来比较的 只是一个值 用来判断是否显示输入框的
        newObj:{}, //用来给输入框赋值的
        hash:'all',
    },
    methods:{
        saveUpdate(todo){ //保存时将当前的title 改变成最新的title
           todo.title =this.newObj.title;
           this.cancel(); // 把输入框隐藏掉
        },
        cancel(){ //当取消的时候 cur清空 和任何人都比较为false 所以不显示输入框
            this.cur = {};
        },
        saveCurrent(todo){
            //浅拷贝 和 深拷贝
            //this.newObj = {...todo};
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
        newTodos(){ // 通过点击的状态和todos数据 计算出应当显示的结果
            if(this.hash === 'all') return this.todos;
            if(this.hash === 'finish') return this.todos.filter(item=>item.select);
            if(this.hash === 'unfinish') return this.todos.filter(item=>!item.select);
        },
        count(){ //count是根据数组中没有有选中的个数而来的、
           return this.todos.filter(item=>!item.select).length;
        },
    },
    watch:{ //watch只能默认监控一层 [{},{}]
        todos:{
            handler(){ //只要数据源todos发生变化 我们就将他存入到本地存储中
                localStorage.setItem('list',JSON.stringify(this.todos));
            },deep:true //深度监控
        }
    },
    directives:{ //给dom元素添加功能的
        autoFocus(el,params){
            // newObj赋值后在让其获取焦点，让dom渲染完成后
            setTimeout(()=>{
                if(params.value){
                    el.focus();
                }
            },0);
        }
    }
});
let listener = ()=>{
    let hash = window.location.hash; //取出hash值
    hash = hash.length?hash.slice(1):'all'; //没有默认是all
    vm.hash = hash;
};
listener();//进入时先执行一下获取hash值的函数，以后在执行时 只需要触发hashchange事件
window.addEventListener('hashchange',listener,false);
// 路由：不同的路径返回不同的结果 1.hash值 2.h5 history
//1.hash值 会导致路径出现# 开发时使用hash这种方式
//2.browserHistory 不会出现# 但是刷新会导致404错误，上线时我们可以通过服务端来解决这种404问题  history.pushState