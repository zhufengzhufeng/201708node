// 类 Promise 不兼容的 兼容方案es6-promise
// 默认new Promise 就会被直接调用
// 一旦成功或者失败就停止了 不会在发生状态改变
                            // resolve就是then中的第一个函数
                            // reject 代表的就是then中的第二个函数
let p = new Promise(function (resolve,reject) {
    resolve('word');
});
//promise实例上都会有一个then方法
p.then(function (data) { //success
    console.log(data)
},function (err) { //error
    console.log(err)
});


let str ='';
function read() {
    return new Promise(function (resolve,reject) { //resolve,reject挂载载Promise原型上的方法
        setTimeout(()=>{ //setTimeout就是异步的
            str = 'hello';
            resolve(str);
        },3000);
    });
}
read().then(function (data) {
    console.log(data);
},function () {});
