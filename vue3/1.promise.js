// 先读取一个文件 读完后将内容输出
// 解决异步的方案就是callback函数
// callback-> promise -> generator -> async await
// callback 将后续逻辑当作参数传递给异步的方法中，当异步执行后在执行调用
// 1.回调地狱
// 2.同步异步的结果
let str ='';
function read(callback) {
    setTimeout(()=>{ //setTimeout就是异步的
        str = 'hello';
        callback(str)
    },3000);
}
let out = (data)=>{console.log(data)};
read(out);


