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

// 3) concat
var buff1 = new Buffer('珠峰');
var buff2 = new Buffer('培训');
// param1 是数组buffer
// param2 是返回新buffer的长度
//console.log(Buffer.concat([buff1, buff1, buff2]).toString());

Buffer.myConcat = function (list,totalLength) {
    //1.先判断totalLength是否传递，如果传递用传的
    if(typeof totalLength === 'undefined'){ //2.没传递需要自己循环数组算一个总长
        totalLength = list.reduce((prev,next)=>prev+next.length,0);
    }
    //3.创建一个大buffer将每一个小buffer拷贝到大buffer中
    let result = new Buffer(totalLength);
    let index=0;
    list.forEach(buff=>{
        buff.copy(result,index);
        index+=buff.length;
    });
    //4.截取有效长度
    return result.slice(0,index)
};
console.log(Buffer.myConcat([buff1, buff1, buff2],2000).toString());