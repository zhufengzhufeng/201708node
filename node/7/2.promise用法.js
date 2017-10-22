//1.promise是自带的类，可以new参数是一个执行器,执行器中有两个参数，参数的类型是函数 resolve成功 reject失败
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve('我爱你');
        reject('不爱了');
    },2000);
});
// 实例上会拥有一个then方法，then方法中有两个参数，分别是成功的回调和失败的回调
p.then(function (data) {
    console.log(data);
},function (err) {
    console.log(err);
});