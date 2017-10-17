// 使用第三方模块安装即可,可以通过模块名引入包
// 文件模块需要通过./引用
let str = require('handsome');
console.log(str);

let newStr = require('zfpx');
console.log(newStr);

// 查找模块的路径，如果当前目录下没找到则会去上级目录查找，直到找到根目录为止，找不到报错
console.log(module);
// exports require module
// __filename 当前文件的绝对路径
// __dirname 当前文件夹的绝对路径
console.log(__filename,__dirname);

