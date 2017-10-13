console.log('我非常帅');
console.log('我非常帅');
let fn = () =>{
    console.log('hello zfpx')
};
fn();
// 通过require引入 打包后会将内容一起打包到bundle.js中
/*let str = require('./a.js');*/
// es6 模块的导入导出

import {str} from './a.js';
import w from './a.js';
console.log(w,str);
