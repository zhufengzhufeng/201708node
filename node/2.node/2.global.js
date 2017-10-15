console.log(this); //在文件内直接放问this this不是global(文件执行时外层有一个你看不到的闭包。node天生自带模块化，在闭包中this指向被重新更改了)
let a = 1;
console.log(global.a); // var和global不是一个作用域的

console.time('start');
for(let a = 0;a<10000000000;a++){}
console.timeEnd('start');

/*console.log('log');
console.warn('warn');
console.error('error');
console.info('info');*/
//console.log()
//console.warn()
//console.error()
//console.info()
//console.time()
//console.timeEnd()

// Buffer 缓存区
// clearImmediate
// clearInterval
// clearTimeout

// process 进程

