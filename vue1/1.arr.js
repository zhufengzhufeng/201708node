// 配置node环境  setting -> npm
// 配置es环境  setting -> language -> es6

// 1.includes 包含 返回的是boolean类型
console.log([1, 2, 33].includes(3)); // indexOf
// 2.some 找的是true和 every找的false 是一对 返回的是boolean类型
let arr = [1,2,3,4,5,6]; // 编程式的风格 看到运行的过程，代码逻辑，多，
// 声明式 不关心如何实现
let flag = arr.some(function (item,index) {
    return item>3;// 如果有一项返回true 则结果就是true
});
/*let flag = arr.every(function (item,index) {
    return item>3;// 如果有一项返回false 则结果就是false
});*/
console.log(flag);
/*
let flag =false;
for(let i = 0; i<arr.length;i++){
    let cur = arr[i];
    if(cur > 3){
        flag = true;
        break;
    }
}
console.log(flag)*/
