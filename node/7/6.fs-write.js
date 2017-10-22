let fs = require('fs');
// 如果文件不存在会创建文件。如果存在会将内容清空
// 默认写入是utf8格式
//fs.writeFileSync('1.txt',new Buffer('珠峰'));
fs.writeFile('1.txt',2,function (err) {
    if(err)console.log(err);
});