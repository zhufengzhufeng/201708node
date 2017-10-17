// 发布 订阅 预先安排一些事（一种一对多的关系）
// 水烧开了 = [吃饭，洗脸，洗脚]
// 女生失恋 = [购物，哭，吃]
// {女生失恋:[shopping,cry]}
function Girl() {
    this._events = {}; // 存放的就是事件绑定的内容
}
Girl.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){ //看看对象中是否存在这个事件
        this._events[eventName].push(callback); //  {女生失恋:[shopping,cry]}
    }else{
        this._events[eventName] = [callback]; // {女生失恋:[shopping]}
    }
};
Girl.prototype.emit = function (eventName,...args) { // 剩余运算符
    if(this._events[eventName]){ //如果绑定过这样一个数组
        this._events[eventName].forEach(cb=>cb(...args)); // 拓展运算符
    }
};
Girl.prototype.off = function (eventName,callback) { //取消订阅
    if(this._events[eventName]){
        this._events[eventName] = this._events[eventName].filter(cb=>cb!==callback);
    }
};
let girl = new Girl();
let shopping = function (val) {console.log('购物',val);};
let cry = function (val) {console.log('cry',val)};
girl.on('女生失恋',shopping);
girl.off('女生失恋',shopping);
girl.emit('女生失恋','我');