姜文 qq 1035465284  18310349227
## 每天总结一篇文章
## webstorm 2017.1
```
http://jetbrains.com/
```

## node 7.6以上(es6+es7 async await) 8.5支持import export

## 数组的方法
- es5 es6
```
pop push shift unshift indexof slice lastIndexOf reverse sort join map forEach filter for of splice includes concat some every reduce find
```

## 框架和库 (vue适合移动端)
- 框架是库的升级版
- jquery zepto animate.css 库中提供了一些方法，我们调用库里的方法
- 框架是按照人家的写法，人家调我们 (被动) 按照人家的用法使用
- 渐进式框架 vue核心是做视图的，可以做成工程化的项目
- 压缩后20k

## vue很简单？
-  hello world简单其他还是很难的
-  github.io/vuejs

## 谈一谈对渐进式的理解
- “声明式”渲染 不需要关心过程，不需要关心如何实现
- 组件将相同的内容抽出来，多次使用（复用，而且方便维护）
- 路由spa框架 single page application,不需要页面跳转，只有一个 （前端路由）
- 大规模的状态管理 为了管理数据的
- 构建工具 gulp webpack 默认提供了构建webpack的方法
- ajax获取 vue-resource / axios
- vue + vue-router + vuex + vue-cli + axios = vue全家桶

> vue由很多部分组成，可以随意选择搭配，组成自己想要的框架

## 为什么学vue？
- 面试要问
- 用js 分为 DOM BOM ,操作dom很耗性能，vue数据驱动不建议直接操作dom，操作的是"数据". 虚拟dom 再内存中创建一个表示dom结构的对象，当需要渲染时将这个对象映射成dom

## MVC
- model数据模型
- view 视图
- controller控制器

## MVVM 双向数据绑定（数据变化会影响视图 视图变化会影响数据）
- model
- view
- viewModel

> 只有表单元素 支持双向数据绑定

## 下载vue  npm(node pacakge manager)
```
npm init -y
npm install vue --save

```

## 表单元素
- 可以实现双向数据绑定
- 指令 指令就是一个行间属性,而且必须以v-开头，一种是官方提供的，还有一种就是自定义的

## 指令(行间属性)
- v-model 双向绑定 input type="text" type="checkox" type="radio" textarea
- v-once 绑定一次 
- v-html 展示成html
- v-text 可以解决闪烁问题（解决单行闪烁）{{}}是v-text简写
- v-for  循环 可以循环数组 对象 字符串
    ```
    v-for="value in arr"
    v-for="(item,index) in arr"
    ```
- v-clock 闪烁防止
- v-show 操着的是样式
- v-if 操作的是DOM

## 设置快捷键
- file => settings =>live template => + => 写快捷键的的名字 => 快捷键的内容 => define