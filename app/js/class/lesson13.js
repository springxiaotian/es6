{
    //Promise是es6的一种异步的解决方案
    //处理异步的方法：回掉，事件出发，定时器
    //用来解决异步操作问题
    let ajax=function(callback){
        //console.log('执行');
        setTimeout(function(){
            callback&&callback.call()
        },1000)
    }
    ajax(function(){
        //console.log('timeout1');
    })
    //先输出执行，后输出timeout1
}
{
    //同一个方案，用Promise如何解决
    let ajax=function(){
        //console.log('执行2');
        return new Promise(function(resolve,reject){
            //ajax函数运行后不再执行回调，而是返回一个对象它是Promise实例，该实例对象具有then的方法去执行下一步的功能
            //then方法具有2个参数，resolve,执行下一步操作，reject中断下一步操作
            //我们模拟一秒钟通信
            setTimeout(function(){
                resolve();
            },1000)
        })
    }
    //ajax方法运行后返回的是一个Promise实例，而该实例具有then方法，表示要执行下一步
    //then()的函数体就是下一步
    ajax().then(function(){//第一个function对应的是resolve
        //console.log('promise','timeout2');
    })/*function(){//第二个function对应的是reject

    })*/
    //先执行"执行2"，再执行"promise timeout2"
    //Promise的可读性和可维护性都有很大的帮助
}
{
    let ajax=function(){
        console.log('执行3');
        return new Promise(function(resolve,reject){
            //ajax函数运行后不再执行回调，而是返回一个对象它是Promise实例，该实例对象具有then的方法去执行下一步的功能
            //then方法具有2个参数，resolve,执行下一步操作，reject中断下一步操作
            //我们模拟一秒钟通信
            setTimeout(function(){
                resolve();
            },1000)
        })
    }
    ajax()
        .then(function(){//第一个function对应的是resolve
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },2000)
        })
    })
        .then(function(){
            console.log('timeout3');
    })
    //Promise也有一些缺点。
    // 首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
    // 其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
    // 第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
}
{
    let ajax=function(num){
        console.log('执行4');
        return new Promise(function(resolve,reject){
            if(num>5){
                resolve();
            }else{
                throw new Error('出错了');
            }
        })
    }
    ajax(3).then(function(){//当传的参数小于5的时候catch Error: 出错了
      console.log('log',3);//log 6
    }).catch(function(error){//捕获错误
        console.log('catch',error);
    })
}
//promise的2个方法
{
   //所有图片加载完成再添加到页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img=document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve(img);
            }
            img.onerror=function(err){
                reject(err);
            }
        });
    }
    function showImgs(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img);
        })
    }
    Promise.all([//用法：即将多个promise实例当作一个promise实例
        //当所有promise实例发生变化到时候，新到promise实例才会发生变化；
        //如下3张图片都加载完毕后才会执行then方法
        loadImg('http://i4.buimg.com/567571/dflef0720bea6831.png'),
        //loadImg本身就是一个promise实例，它执行都操作主要是做一个图片加载都动作，因为loadImg方法返回都是一个promise
        //当3个图片加载动作放在Promise.all中加载完毕后会生成一个新的promise实例，才会触发显示图片的逻辑then.
        loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
        loadImg('http://i2.buimg.com/567571/5eb8190d6b2a1c9c.png')
    ]).then(showImgs)
}
{
    //promise.rise()是和promise.all()相反的作用
    //需求：3张图片，无论哪个先加载到页面，只显示先到到一个图片即可；
    //有1个图片加载完就先添加到页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img=document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve(img);
            }
            img.onerror=function(err){
                reject(err);
            }
        });
    }
    function showImgs(img){
        let p=document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }
    Promise.race([//多个实例中，有一个状态率先改变，那么race的实例也会跟着改变，其他的就不响应了
        //用法：如下需要加载的图片，有一个需要改变，race就创建promise新对象，就可以执行then方法
        loadImg('http://i4.buimg.com/567571/dflef0720bea6831.png'),
        loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
        loadImg('http://i2.buimg.com/567571/5eb8190d6b2a1c9c.png')
    ]).then(showImgs)
}