console.log(this); //在文件内直接放问this this不是global(文件执行时外层有一个你看不到的闭包。node天生自带模块化，在闭包中this指向被重新更改了)
let a = 1;
console.log(global.a); // var和global不是一个作用域的

/*console.time('start');
for(let a = 0;a<10000000000;a++){}
console.timeEnd('start');*/
//1)
/*console.log('log');
console.warn('warn');
console.error('error');
console.info('info');*/
//console.log()
//console.warn()
//console.error()
//console.info()
//console.time()
//console.timeEnd()

// 2) process 进程
console.log(process.pid); //进程id
/*
setInterval(function () {
    process.kill(10288); //杀死进程
},3000);
*/
// 配置当前运行的环境变量
// http://localhost:8080
// http://www.zhufengpeixun.cn
// windows set NODE_ENV=dev
// mac export NODE_ENV=dev
// 在哪个窗口下配置的就在哪里使用
//等待同步代码执行后在执行
setImmediate(function () {
    console.log('第二个小本上立刻执行');
});
setTimeout(function () {
    console.log('setTimeout立刻执行');
});
process.nextTick(function () {
    console.log('当前队列的底部');
});
let url = ''; //可以动态的区分变量
if(process.env.a=='1'){
    url = 'http://localhost:8080';
}else{
    url = 'http://www.zhufengpeixun.cn'
}
console.log(url);
// 顺序  同步 > nextTick > setImmediate > setTimeout


// 4.timeout 箭头函数中没有this执向 没有arguments
setTimeout( function(eat,food){ //在node中this指向的是自己
    console.log(eat,food)
},0,'水果','食物');




// Buffer 缓存区
// clearImmediate
// clearInterval
// clearTimeout

