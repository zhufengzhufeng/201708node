var a = (function (exports,require,module) {
    module.exports = exports = {};
    var a = 1;
    //global.a= a;
    //module.exports = a;
    //exports.a = a;
    return module.exports;
})({},{},{});
console.log(global.a);