// 要默认导出这样一个配置对象，当执行npm run start时会执行此文件
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   entry:'./src/main.js',
   output:{
       filename:'bundle.js',
       path:path.resolve('./dist')
   },
   // 解析es6语法 需要提供对应模块的规则
   module:{
       rules:[ //设置对应的规则,js用babel-loader进行翻译,node_modules文件夹不需要翻译
           {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
           // style-loader 将转化好的css插入到style标签内
           // css-loader 用来解析css模块的
           // 从右往左写 顺序不能写反
           {test:/\.css$/,use:['style-loader','css-loader']},
           {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
           // 一般情况下8k以下的我们会转化成base64
           // limit可以限制图片超过此值时不进行转化
           // limit超过limit的值会把图片生产出来，如果小于会转成base64
           {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=5192'}
       ]
   },
   plugins:[ // 配置插件
       // 会找到模板文件将打包后的结果插入到html中，最后产出到output的path中
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        })
   ]
};