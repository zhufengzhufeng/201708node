function buyPack() { //正面就买 反面就不买
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve('买');
            }else{
                reject('不买');
            }
        },Math.random()*10*1000);
    })
}
buyPack().then((data)=>{console.log(data)},(err)=>{console.log(err)});


