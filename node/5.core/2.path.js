let path = require('path');
// 你给他一个相对路径他给你一个绝对路径
// 加上当前的__dirname
console.log(path.resolve('a', '..', 'c.js'));
// join方法不会添加__dirname路径
console.log(path.join(__dirname,'a', '..', 'c.js'));