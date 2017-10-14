//Object.assign浅拷贝 和  深拷贝 递归循环拷贝
let cur ={age:1};
let obj = {name:1,age:cur,a:function () {}};
let obj2 = JSON.parse(JSON.stringify(obj)); //不支持函数
cur.age = 2;
console.log(obj2);

//slice 浅拷贝
let a = [1,2,3];
let arr = [1,2,3,a];
let newArr = arr.slice(0);
a[0] = 100;
console.log(newArr);