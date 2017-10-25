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
function writeBook(data,cb) {
  fs.writeFile('./db/book.json',JSON.stringify(data),cb);
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
        if(id>=0){ //查询某一个
          getBook(function (books) {
            let book = books.find(item=>item.id===id);
            let result = {book};
            if(book){
              result.err = 0;
            }else{
              result.err = 1;
            }
            res.end(JSON.stringify(result));
          });
        }else{ // 查询所有
            getBook(function (data) {
              res.end(JSON.stringify(data.reverse()));
            });
        }
        break;
      case 'POST':
        //获取客户端传递过来的数据
        let str ="";
        req.on('data',function (chunk) {
          str+=chunk;
        });
        req.on('end',function () {
          let book = JSON.parse(str); //前端传递的书
          // ....
          getBook(function (books) { //读取所有书
            book.id = books.length?books[books.length-1].id+1:1;//增加id属性
            books.push(book); //将获取的书和原有的拼在一起
            writeBook(books,function () { // 将书写入到json中成功后返回添加后的那一项
              res.end(JSON.stringify(book));
            })
          });
        });
        break;
      case 'DELETE':
        if(id){
          getBook(function (books) {
            // 过滤掉要删除的图书
            books=books.filter(item=>item.id!==id);
            writeBook(books,function () { // 将最新的书协会到json中
              res.end(JSON.stringify({}));
            });
          })
        }
        break;
      case 'PUT':
        if(id){
           let str = '';
           req.on('data',function (chunk) {
             str+=chunk;
           });
           req.on('end',function () {
             let book = JSON.parse(str);
             getBook(function (books) {//获取所有书
               books = books.map(item=>{
                 if(item.id === id){ //找到id相等的那一项替换掉
                   return book
                 }
                 return item
               });
               writeBook(books,function () { //将最新的书协会到页面中
                 res.end(JSON.stringify(book));
               })
             })
           })
        }
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

