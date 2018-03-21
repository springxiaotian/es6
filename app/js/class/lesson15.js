{
    /*
     generator的用法，即异步编程的一种解决方案，
     它内部包括很多的步骤，在运行的时候
     当generator遇到yield或者return，
     那么generator就会停止不会继续运行，
     通过调用next()函数进行下一步，直到结束
    */
}
{
    //定义generator函数
    let tell=function* (){
        yield 'a';//函数体中包含yield语句
        yield 'b';
        return 'c'
    }
    let k=tell();
    console.log(k.next());//{value: "a", done: false}
    console.log(k.next());//{value: "b", done: false}
    console.log(k.next());//{value: "c", done: true}
    console.log(k.next());//{value: undefined, done: true}

    /*
    * 描述如上过程，当generator运行的时候，执行了tell()，它会执行第一个yield之前的语句，
    * 当k.next()调用的时候generator会执行第一个yield，再执行next(),会执行第二个yield，以此类推
    * 从而保证了函数体内部，看上去是一个异步操作的过程。这就是generator的基本用法。
    * */
}
{
    //generator函数和iterator接口的关系
    /*
    * 任意一个对象的iterator接口都是部署这Symbol.iterator属性上.
    * generator函数就是一个遍历器生成函数，所以我们可以直接赋值给Symbol.iterator
    * 从而使对象也具备了iterator接口
    * */
}
{
    //使用generator作为遍历器的返回值
    let obj={};
    obj[Symbol.iterator]=function* (){
        yield 1;
        yield 2;
        yield 3;
    }
    for(let value of obj){
        console.log('value',value);
        /*
        * value 1
        * value 2
        * value 3
        * */
    }
}
{
    //什么情况下generator函数有它最大的优势
    //需求：描述一个事物a,b,c三种状态
    let state=function* (){
        while(1){//abcabcabc....
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status=state();
    console.log(status.next());//{value: "A", done: false}
    console.log(status.next());//{value: "B", done: false}
    console.log(status.next());//{value: "C", done: false}
    console.log(status.next());//{value: "A", done: false}
    console.log(status.next());//{value: "B", done: false}
    console.log(status.next());//{value: "C", done: false}
    console.log(status.next());//{value: "A", done: false}
}
{
    //async 是generator 的语法糖，基本一样就是写法不一样
    //需求：描述一个事物a,b,c三种状态
    /*let state=async function (){//去掉* ，添加async在前面，它需要安装一个babel的插件
        while(1){//abcabcabc....
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status=state();
    console.log(status.next());//{value: "A", done: false}
    console.log(status.next());//{value: "B", done: false}
    console.log(status.next());//{value: "C", done: false}
    console.log(status.next());//{value: "A", done: false}
    console.log(status.next());//{value: "B", done: false}
    console.log(status.next());//{value: "C", done: false}
    console.log(status.next());//{value: "A", done: false}*/
}
{

    //generator实例
     let draw=function(count){
         //具体抽奖逻辑自由发挥
         //输出剩余次数
         console.log(`剩余${count}次`);
     }
     let residue=function* (count){
         while(count>0){//限制次数
             count--;
             yield draw(count);//执行具体的抽奖逻辑
         }
     }
     let star=residue(5);
     let btn=document.createElement('button');
     btn.id='start';
     btn.textContent='抽奖';
    document.body.appendChild(btn);
     document.getElementById('start').addEventListener('click',function(){
         star.next();
     },false)

     console.log(star);//
}
{
    //generator实例2
    //服务端的某个数据状态经常会变化，前端需要定时不断的去服务端取那个状态：常轮询，通过定时器不断的访问状态接口
    let ajax=function*(){
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({code:0});
            },200)
        });
    }

    //轮询的过程
    let pull=function(){
        let generator=ajax();
        let step=generator.next();
        step.value.then(function(d){//d是拿到的客户端的数据
            //判断它是否是新的
            if(d.code!=0){
                setTimeout(function(){
                    console.log('wait');
                    pull();
                },1000);
            }else{
                console.log(d);
            }
        });
    }
    //pull();//{code: 0}
}