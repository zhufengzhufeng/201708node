function Parent() {
    this.name = '父亲';
}
Parent.prototype.eat = function () {
    console.log('吃饭');
};
function Child() {
    //Parent.call(this);
}
let util = require('util');
util.inherits(Child,Parent);
console.log(util.isArray([]));
//判断数据类型
//1.typeof
//2.instanceof
//3.constructor
//4.Object.prototype.toString.call();


//4.es6继承 （extends + super) Object.setPrototypeOf
//Object.setPrototypeOf(Child.prototype,Parent.prototype);
let child = new Child();
console.log(child.eat());

//3.既有私有又有公有 call+Object.create
// Child.prototype = new Parent();

//2.只继承父类的公有属性
//Child.prototype.__proto__ = Parent.prototype;
/*function create(parentProto) {
    let Fn = function () {}; //创建一个空类
    Fn.prototype = parentProto; // 让空类的原型指向传进来的原型
    return new Fn(); //创建的实例 只有传进来的公有方法
}
Child.prototype = create(Parent.prototype);
let child = new Child();
console.log(child.name);*/

//1.只要父类的私有方法
// call继承
