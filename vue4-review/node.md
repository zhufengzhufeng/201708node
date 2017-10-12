## 安装需要的依赖
```
$ npm install vue bootstrap axios
```

## 取值表达式{{}},取的是实例上的
- 三元运算符，赋值运算
- 不能写js语句

## v-model(双向数据绑定) Object.defineProperty(不兼容ie8以下)
```
https://github.com/DMQ/mvvm
```
- input type="text" type="checkbox" type="radio"
- textarea
- select

> v-model 会忽略所有表单元素的 value、checked、selected

## v-bind 动态的绑定
- 在属性中需要取到data中的数据时需要使用动态绑定一般采用简写方式 :val='data'

## v-on 绑定事件
- 在页面上调用方法需要使用v-on来绑定。可以简写成@click="fn"


## v-once
## v-text
## v-cloak
## v-html

## v-for
- 要循环谁 就将指令写在谁的身上,可以采用括号的方式(val,key) in result
- 可以循环 数字 字符串 数组 对象

## v-if / v-show(template)

## vm.$nextTick
- 默认在mounted中就放置一个$nextTick


## 修饰符 自定义键盘修饰符

## computed 和 watch

## 复选 单选

## 指令和过滤器

## vm.$el vm.$data vm.$refs vm.$options vm.$watch vm.$set

## 生命周期

## ref和v-for的问题