## 通过webpack来打包vue
- vue组件都写在写在一起了,.vue文件,每一个.vue文件都是一个组件 .js babel-loader .css css-loader
.vue vue-loader

## 组件组成
- 模板（结构） 需要vue-template-compiler
- 逻辑（行为）
- 样式

## webpack(模块化)
- webpack webpack-dev-server
- js打包 babel-core babel-loader babel-preset-es2015 babel-preset-stage-0
- css模块 less less-loader css-loader style-loader
- img模块 url-loader file-loader
- html打包 html-webpack-plugin
- vue模块 vue-loader vue-template-compiler
- vue vue-router