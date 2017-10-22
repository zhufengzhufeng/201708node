let http = require('http');
// http模块是一个内置模块
let server = http.createServer(function (req,res) {
    //req 代表的是客户端的请求 req是一个可读流
    //res 代表就是服务端的响应 res是一个可写流
    // 监听函数，当浏览器发送请求时会执行此函数
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.end('好的 欢迎你'); // buffer or string
});
let port = 3000;
server.listen(port,function () {
    console.log(`开启${port}`);
}); // 127.0.0.1 == localhost