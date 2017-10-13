## 流行的打包工具webpack


## 模块化(多人开发，命名冲突)
目的：为了提供如何导出模块 如何使用模块 如何创建模块
- 单例(不能完全解决命名冲突)调用时名字过长
- 闭包 函数执行时就产生一个作用域，此时可以称之为闭包，私有化,完整的闭包就是当一个函数执行时返回一个引用数据类型,并且结果被外部变量接收 此时这个函数不会销毁。 {let} 大括号也是有块及作用域的。
- requirejs (AMD) seajs (CMD) 前端解决模块化的库
- COMMONJS规范 node提供的 require module.exports(node中都是以js文件作为模块)
- es6 import export 他是天生的 （有兼容性问题） 60+的chrome （一个js文件就是一个模块）

## 初始化package.json
```
npm init -y
```

## 安装webpack(全局安装和本地安装，一般我们不会采用全局安装，全局安装会造成版本差异，因此不会采用全局安装)
```
npm install webpack --save-dev
```

## 使用webpack
- 其实运行的就是bin/webpack.js,默认会找当前目录下叫webpack.config.js的文件
- 配置scripts脚本，在当前目录下
```
npm run start
```

> 改变文件的位置

## 转译es6语法
- babel-core是babel的核心模块用babel就需要安装
- babel-loader 用来做翻译的
```
npm install babel-core babel-loader --save-dev
```

## 给翻译官添加es6语法识别(预设)
```
npm install babel-preset-es2015 --save-dev
```


## webpack是基于node的所以语法是commonjs规范
- css预编译器 less sass stylus
- 每次引用一个文件都会产生http请求，webpack打包工具
- 图片base64 不用发送请求 (较小的图片 自动转化base64)
- es6->es5 webpack可以直接使用babel (babel-cli)
- 更改项目代码浏览器自动刷新
- webpack可以帮我们提供服务接口
- 可以支持模块化 转化commonjs 可以转化es6 可以转化amd cmd umd
