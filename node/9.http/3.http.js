let http = require('http');
let fs = require('fs');
let server = http.createServer(function (req,res) {
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }
    else if(req.url === '/index.css'){
        res.setHeader('Content-Type','text/css;charset=utf-8');
        fs.createReadStream('index.css').pipe(res);
    }else if(req.url === '/index.js'){
        res.setHeader('Content-Type','application/javascript;charset=utf-8');
        fs.createReadStream('index.js').pipe(res);
    }

    else{
        res.statusCode = 404;
        res.end('Not found');
    }
    /*fs.readFile('index.html',function (err,data) {
        if(err)return console.log(err);
        res.end(data);
    })*/
});
let port = 3000;
server.listen(port,function () {
    console.log(`开启${port}`);
});