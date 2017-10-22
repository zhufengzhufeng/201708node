let fs = require('fs');
function copySync(source,target) {
    // readFileSync writeFileSync
    let result = fs.readFileSync(source);
    fs.writeFileSync(target,result);
}
//copySync('1.txt','2.txt');
function copy(source,target,callback) {
    //readFile + writeFile
    fs.readFile(source,function (err,data) {
        if(err)return callback(err);
        fs.writeFile(target,data,callback);
    });
}
copy('1.txt','2.txt',(err)=>{});
// 缺陷：会淹没可用内存，疯狂的像内存中读取,希望的是读一点写一点 (流)

// 存在 判断文件或者文件夹是否存在
let flag = fs.existsSync('1111.txt');
console.log(flag);
// 创建目录 删除目录 删除文件 追加内容 判断文件状态。。。