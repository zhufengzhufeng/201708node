let fs = require('fs');
function copy(soruce,target) {
    let rs = fs.createReadStream(soruce,{highWaterMark:4}); //10
    let ws = fs.createWriteStream(target,{highWaterMark:1});
    rs.on('data',function (chunk) {
        if(ws.write(chunk)===false){ //如果写不下就暂停
            rs.pause();//会暂停data事件触发
        }
    });
    ws.on('drain',function () { //当给我的内容全部写完后会触发drain事件
        console.log('干了');
        rs.resume(); //恢复读取
    });
    rs.on('end',function () { //监听读取完毕的事件
        ws.end(); //关闭文件
    });
}
copy('1.txt','2.txt');