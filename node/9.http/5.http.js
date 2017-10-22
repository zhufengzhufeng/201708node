let http = require('http');
let fs = require('fs');
let mime = require('mime');
let url = require('url');
let server = http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);//true 是将query变成一个对象 .query.a
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }else{
        if(fs.existsSync('.'+pathname)){
            res.setHeader('Content-Type',mime.getType(pathname)+';charset=utf-8');
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