// 文件模块必须以./方式来引用 可以省略.js 后缀.json .node,引用多次只会执行一次 默认会缓存
 require('./sum.js');
/*(function () {
    module.exports = exports = {}
    let sum = (...args) =>{
        return args.reduce((prev,next)=>{
            return prev+next;
        });
    };
    global.sum = sum
    return module.exports
})()*/
//1.console.log(sum(1, 2, 3, 100, 200));
//2.r(1,2,3,4)
//3.r.sum(1,2,3,44,5);