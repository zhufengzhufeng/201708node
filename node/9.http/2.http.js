let http = require('http');
let server = http.createServer(function (req,res) {
    console.log(req.method); // "GET POST PUT DELETE" OPTIONS HEADER
    console.log(req.headers);// 获取请求头 请求头中的数据可以通过小写来获取
    console.log(req.url); //请求的路径 默认是/
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.end('好的 欢迎你'); // buffer or string
});
let port = 3000;
server.listen(port,function () {
    console.log(`开启${port}`);
});