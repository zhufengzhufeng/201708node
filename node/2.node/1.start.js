// 在命令行下 通过命令运行 node+文件名
// 通过webstorm运行
// 配置node的webstorm中的环境变量，和代码提示
   // settings-> node
// 配置es6语法
   // settings->language

function make(cb) {
    setTimeout(function () {
        console.log('做饭');
        cb();
    },2000);
}
function eat() {
    console.log('吃')
}
make(eat);
