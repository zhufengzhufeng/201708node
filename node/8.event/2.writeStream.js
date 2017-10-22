let fs = require('fs');
// ws表示的是可写流对象
// 默认写入的编码格式utf8;
let ws = fs.createWriteStream('2.txt',{highWaterMark:10});//16k
let flag = ws.write('1123'); // string or buffer
console.log(flag);//此返回值用来描述，是否可以继续写入，比如说如果读取了64k 写的空间16k,往文件中写发现写不下，返回false，就不要在继续读取了。
ws.on('drain',function () { //抽干方法，当内存中的内容全部写入文件后触发此函数
    console.log('drain');
});
ws.end('1'); //会将end中的内容再次调用write方法，最后将文件关闭，end方法会将没有写入的内容强制写入最后在关闭

