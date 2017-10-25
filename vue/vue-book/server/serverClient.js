let http = require('http');
let url = require('url');
let sliders  = require('./db/sliders');
let fs = require('fs');
function getBook(cb) {
  fs.readFile('./db/book.json','utf8',function (err,data) {
    if(err || data.length==0){ //如果文件不存在或者内容是空 传递空数组
        cb([]);
    }else{
        cb(JSON.parse(data));
    }
  })
}
http.createServer(function (req,res) {

  let {query,pathname} = url.parse(req.url,true);
  // 实现轮播图接口
  if(pathname === '/api/sliders'){
     res.end(JSON.stringify(sliders));
  }else if(pathname==='/api/hot'){
    getBook(function (data) {
      res.end(JSON.stringify(data.reverse().slice(0,12)));
    });
  }else if(pathname==='/api/book'){
    let id = parseInt(query.id); //是否传递了id
    switch (req.method){ //GET POST DELETE PUT
      case 'GET':
        if(id){ //查询某一个

        }else{ // 查询所有
            getBook(function (data) {
              res.end(JSON.stringify(data.reverse()));
            });
        }
        break;
      case 'POST':
        break;
      case 'DELETE':
        break;
      case 'PUT':
        break;
    }
  }
  // restful风格
  // /book http动词来判断当前请求是要做什么动作  get post put delete
  // /book?id=1 默认没参数是获取所有 get 如果传递获取某个
  // /book?id=1 put 请求体 {}
  // /book delete
}).listen(3000);

// npm install -g nodemon
// nodemon 文件名

