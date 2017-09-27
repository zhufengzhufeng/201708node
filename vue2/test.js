// ES5 getter setter
let obj = { //双向绑定 + 发布订阅
    get a(){
        return 100
    },
    set a(val){
        console.log(val)
    }
};
obj.a = 200;