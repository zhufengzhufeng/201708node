// 在utf8一个汉子几个字节？ 3个
var buff = new Buffer(3);
console.log(buff);
var buff = new Buffer('珠峰');
console.log(buff);
var buff = new Buffer([16,16]);
console.log(buff);
// 1) slice返回一个新的buffer
let buffer = buff.slice(0,1);
console.log(buffer);
// 2) copy
var b = new Buffer(12);
var buff1 = new Buffer('珠峰');
var buff2 = new Buffer('培训');
// targetBuffer 目标buffer, targetStart, 目标的开始 sourceStart 源的开始, sourceEnd 源的结束,默认就是将全部内容进行拷贝
buff1.copy(b,0);
buff2.copy(b,buff1.length,0,buff2.length);
console.log(b.toString()); //toString 可以将buffer转化成字符串
