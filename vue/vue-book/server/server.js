let http = require('http');

// 4444 -> 3000 跨域
// 协议 主机名 端口一个不一致都会导致跨域问题
// cors 服务端配置允许前端跨域
// jsonp 服务端放回一个方法执行 和ajax不是一个东西
// iframe跨域 postMessage
// window.name
// nginx
// webpack实现跨域 上线后配置失效
let url = require('url');
http.createServer(function (req,res) {
  let {pathname,query} = url.parse(req.url,true);
  if(pathname === '/jsonp'){
    let school = {name:'zfpx'};
    // 'v(school)'
    res.end(`${query.a}(${JSON.stringify(school)})`);
  }
}).listen(3000);
