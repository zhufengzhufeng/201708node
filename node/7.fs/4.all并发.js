let fs = require('fs');
function read(url) {
    return new Promise((resolve,reject)=>{
        fs.readFile(url,'utf8',function (err,data) {
            if(err)return reject(err);
            resolve(data);
        });
    });
}
//all方法第一个参数就是promise实例的数组，返回的结果还是一个promise对象
//如果有一个失败就真的失败了
async function a() {
    let result = await Promise.all([read('1.txt'),read('2.txt')]);
    console.log(result)
}
a();
/*
Promise.all([read('1.txt'),read('2.txt')]).then(([name,age])=>{
    // let [name,age] = data;
    /!*let name = data[0];
    let age = data[1];*!/
    console.log(name,age);
}).catch(err=>{
    console.log(err)
});
*/
