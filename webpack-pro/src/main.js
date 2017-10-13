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

let arr = [1,2,3];
let arr1 = [4,5,6];
console.log([...arr,...arr1]); //es6语法

let obj = {name:1};
let obj2 = {age:2};
console.log({...obj,...obj2}); // es7语法


// es6 stage-4 stage-3 stage-2 stage-1 stage-0


//把css文件当作模块处理引入到main中
import './index.css';

// 把less文件当作模块插入到页面中

import './style.less';

// 不能在js中直接使用图片地址，否则会导致404 因为webpack认为是字符串，不会进行解析,在js中使用图片需要import

import jpg from './1.jpg';
let oImg = document.createElement('img');
oImg.src = jpg;
document.body.appendChild(oImg);

let oImg1 = document.createElement('img');
oImg1.src ='https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png' ;
document.body.appendChild(oImg1);














