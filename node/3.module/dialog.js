class Dialog {
    constructor(){
    }
    create(){
        console.log('创建dialog')
    }
}
// module.exports和exports指向的是同一个内存空间，但是最后返回的是module.exports,如果改变exports的指向是不会影响module.exports的。可以通过exports加属性的方式影响module.exports
module.exports = Dialog;
// 1.在exports属性上增加了一个dialog属性 {dialog:Dialog}
// exports.a = Dialog;
// module.exports = {a:Dialog}

/*
function Dialog() {}
Dialog.prototype.create = function () {
    console.log('创建dialog')
}*/
