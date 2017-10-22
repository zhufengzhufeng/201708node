// 发布 订阅 on emit
// 一对多的关系on方法用来绑定事件 {女生失恋:[逛街,吃,哭]}
let EventEmitter = require('events');
let util = require('util'); // util工具包用来实现继承的
function Girl() {}
util.inherits(Girl,EventEmitter); // 继承公有方法
let girl = new Girl();
let shopping = (data) =>{
    console.log('逛街',data);
};
girl.once('女生失恋',shopping); // 只能触发一次
girl.on('女生失恋',shopping);// 绑定事件绑定后emit时会触发，而且可以触发多次
girl.removeListener('女生失恋',shopping); //移除事件监听
girl.emit('女生失恋','你好'); //触发事件
