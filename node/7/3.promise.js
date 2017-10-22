let fs = require('fs');
function read(url) {
    return new Promise((resolve,reject)=>{
        fs.readFile(url,'utf8',function (err,data) {
            if(err)return reject(err);
            resolve(data);
        });
    });
}
// 第一次的then必须通过promise实例调用
// then返回的结果可以继续then，把结果传递给下一个then中，如果返回的是promise对象会继续将这个对象向下传递
// 链式调用
/*read('1.txt').then(data=>{ //1.txt中存的是2.txt的名字,读取2.txt的结果才是最终的结果
    return read(data)
}).then(data=>{
    console.log(data);
}).catch((err)=>{ //任何一个过程中出错都会走catch
    console.log(err)
});*/

// 为了普通类型也可以支持then的写法可以调用resolve方法
Promise.resolve([]).then((data)=>{
    return [...data,1]
}).then((data)=>{
    return [...data,2]
}).then(res=>{
    console.log(res)
});