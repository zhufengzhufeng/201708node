let fs = require('fs');
function copy(soruce,target) {
    let rs = fs.createReadStream(soruce); //10
    let ws = fs.createWriteStream(target);
    rs.pipe(ws); // 将可读流的内容导入到可写流中，会默认调用ws的write和end方法
}
copy('1.txt','2.txt');
// fs.readFile+fs.writeFile 64k以上就不建议这种方式