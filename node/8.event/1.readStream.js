let fs = require('fs');
// highWaterMark默认一次读64k
let rs = fs.createReadStream('1.txt',{highWaterMark:1});
// 非流动模式，监听一个'data'事件 node内部会不停的来触发这个事件
// Buffer.concat([buf1,buf2]);
let arr = [];
rs.on('data',function (chunk) { // chunk类型buffer
  arr.push(chunk);
  rs.pause(); //暂停的是data方法的触发
  setTimeout(()=>{
      rs.resume(); // 恢复data事件触发
  },1000);
});
rs.on('end',function () { //当文件读取完毕后会触发end事件
    console.log(Buffer.concat(arr).toString());
    console.log('end');
});
// on('data') on('end') rs.pause() rs.resume();