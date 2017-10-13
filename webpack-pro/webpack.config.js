// 要默认导出这样一个配置对象，当执行npm run start时会执行此文件
let path = require('path');
module.exports = {
   entry:'./src/main.js',
   output:{
       filename:'bundle.js',
       path:path.resolve('./dist')
   },
   // 解析es6语法 需要提供对应模块的规则
   module:{
       rules:[ //设置对应的规则,js用babel-loader进行翻译,node_modules文件夹不需要翻译
           {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
       ]
   }
};