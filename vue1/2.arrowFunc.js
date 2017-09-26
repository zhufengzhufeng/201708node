// 箭头函数 没有this指向 没有arguments
// 需要改变this就有箭头函数

//改变this指向
//1. var that = this
//2. bind 绑定this ,bind只能绑定一次
//3. 箭头函数
/*function a(x,y) {
    return x+y;
}
let a = (x,y) => x+y;*/
// function x(a) {
//     return function y(b) {
//         return a+b;
//     }
// }
/*let x = a => {
    return b=>{
        return a+b;
    }
}*/
let x = a => b => c => a+b+c; //高阶函数 超过俩箭头的就是高阶函数
console.log(x(1)(2)(3));

// 最外层函数 可以不使用箭头函数
let newFunc = (a,...rest)=>{ //剩余运算符
    console.log(...rest) ;// 展开运算符
};
newFunc(1,2,3);

/*
let obj = {
    a:1,
    b:function () {
        setTimeout(() => {
            console.log(this)
        });
    }
};
obj.b();*/
