let http = require('http');
let url = require('url');
let sliders  = require('./db/sliders');
http.createServer(function (req,res) {
  let {query,pathname} = url.parse(req.url,true);
  // 实现轮播图接口
  if(pathname === '/api/sliders'){
    res.end(JSON.stringify(sliders));
  }
}).listen(3000);
