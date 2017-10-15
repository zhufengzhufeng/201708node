// 文件模块 我们自己写的 必须加./来引用
let r = require('./dialog.js');
// 通过require拿进来的是一个对象
//new r().create();



// 1.new r.a().create();

// exports require module __filename __dirname
// console.log(arguments); //arguments中的属性也叫全局属性，没有挂载在global上


// 模块化
// esm import export 实现前端的模块化 （请求）
// 单例+闭包+amd(requirejs)+cmd(seajs)

// commonjs规范 规定的模块化风格 （基于读写）
// 防止命名冲突，提高代码复用性，高内聚低耦合。分工协作，统一代码风格，方便维护。
    //  定义如何创建模块 每个js都是一个模块
    //  如何导入一个模块 require导入一个模块
    //  如何导出一个模块 exports  module.exports

// http://javascript.ruanyifeng.com/nodejs/module.html

/*
(function (exports,require,module,__filename,__dirname) {
    module.exports = exports = {}; // 源码
    class Dialog {}
    exports = Dialog;

    return module.exports; // 源码
})();
let r =(function (exports,require,module,__filename,__dirname) {
        module.exports = exports = {}; // 源码
        class Dialog {}
        module.exports = Dialog;

        return module.exports; // 源码
})();
 */