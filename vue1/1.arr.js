// 配置node环境  setting -> npm
// 配置es环境  setting -> language -> es6

// 1.includes 包含 返回的是boolean类型
console.log([1, 2, 33].includes(3)); // indexOf
// 2.some 找的是true和 every找的false 是一对 返回的是boolean类型
let arr = [1, 2, 3, 4, 5, 6]; // 编程式的风格 看到运行的过程，代码逻辑，多，
// 声明式 不关心如何实现
/*let flag = arr.some(function (item,index) {
 return item>3;// 如果有一项返回true 则结果就是true
 });*/
/*let flag = arr.every(function (item,index) {
 return item>3;// 如果有一项返回false 则结果就是false
 });*/
//3. 找到某一项  找到一项后就返回 返回的是找到的那一项,如果找不到则返回undefined
let obj = arr.find(function (item, index) {
    return item > 100;
});
console.log(obj);

//4. filter 过滤 返回的是一个新数组 如果回调函数中返回true表示是要，会将这一项放到新数组中,splice数组塌陷
// || 有一个为true则返回true && 一个false 都是false
// [1,2,3,4,5,6]
let newArr = arr.filter(function (item, index) {
    return item !== 2 && item !== 4 //表达式返回true就是保留，返回false则删除
});
console.log(newArr);
//> 每个callback 后面都有一个参数是this指向

//5. 映射成一个新的数组
let nArr = [1, 2, 3, 4, 5, 6].map(function (item, index) {
    if (item === 3) {
        return 5
    }
    return item;
    //return undefined; //返回值会做为当前项的替代
});
console.log(nArr);
//6. reduce 收敛 返回叠加后的结果 有四个 [1,2,3,4,5,6]
//1.代表的是数组的第一项 prev, 后面返回的就是每次迭代后返回的结果
//2.当前项 next
//3.当前项的索引
//4.原数组
let pArr = [{price:20,count:1},{price:39,count:2},{price:56,count:5},{price:56,count:5}];
let r = pArr.reduce(function (prev,next,index) {
    return prev+next.price*next.count;
},0); //在第二个参数上指定第一次的prev
console.log(r);
//数组扁平化
let flatArr = [[1,2,3],[4,5,6],[7,8,9]].reduce(function (prev,next) {
    return prev.concat(next);
});
console.log(flatArr);



//第一次的返回值 会做为下一次的上一次
/*
if(index==1){ //index== 1是循环的第一次 加出来的是数字
    return prev.price*prev.count+ next.price*next.count
}
return prev+next.price*next.count;*/

let mArr = [{price:20,count:1},{price:39,count:2},{price:39,count:2}];
let count = mArr.reduce(function (prev,next,index) {
    console.log(prev,next,index);

    return  prev + next.price*next.count;
},0);
console.log(count);


