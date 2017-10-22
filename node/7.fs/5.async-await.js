let fs = require('fs');
function read(url) {
    return new Promise((resolve,reject)=>{
        fs.readFile(url,'utf8',function (err,data) {
            if(err)return reject(err);
            resolve(data);
        });
    });
}
// async await 是基于promise的
// async中才能使用await
async function a() {
    let result1 = await read('1.txt');
    let result2 = await read(result1);
    console.log(result2);
}
a();


// 第一次输出的结果作为下一次的输入
// Promise.all([p1,p2,p3]).then((array)=>{}).catch
// race 赛跑 谁先执行就返回谁的结果，如果第一个就失败了那就失败了
// Promise.race([p1,p2,p3]).then((array)=>{}).catch
// Promise.resolve() Promise.reject()