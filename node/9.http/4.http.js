let http = require('http');
let fs = require('fs');
let mime = {
    '.js':'application/javascript',
    '.css':'text/css',
    '.html':'text/html'
};
let server = http.createServer(function (req,res) {
    let pathname = req.url;
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }else{
        if(fs.existsSync('.'+pathname)){ //判断文件是否存在
            // /index.css /index.js
            // 获取后缀找到对应的类型 设置头
            res.setHeader('Content-Type',mime[pathname.match(/\.\w+$/)[0]]+';charset=utf-8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode = 404;
            res.end('Not found');
        }
    }
});
let port = 3000;
server.listen(port,function () {
    console.log(`开启${port}`);
});