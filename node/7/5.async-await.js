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
