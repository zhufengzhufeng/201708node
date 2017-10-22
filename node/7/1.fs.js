// fs内置模块核心模块 file System
let fs = require('fs');
// i/o操作 在node能异步就不要同步
//1) 使用readFile 读取的内容必须要存在
//2) 默认读取的是buffer类型
//3) 同步会导致阻塞主线程
/*
    let name = fs.readFileSync('1.txt','utf8');
    let age = fs.readFileSync('2.txt','utf8');
    console.log({name,age});
*/
// 同步 异步的结果
// 回调套回调 promise可以解决回调地狱
// promise 1)合并异步的结果 2)可以解决回调地狱
let school = {};
fs.readFile('1.txt','utf8',function (err,name) {//error-first
    if(err)return console.log(err);
    school.name = name;
    out();
});
fs.readFile('2.txt','utf8',function (err,age) {//error-first
    if(err)return console.log(err);
    school.age = age;
    out();
});
function out() {
    if(school.name&&school.age){
        console.log(school)
    }
}