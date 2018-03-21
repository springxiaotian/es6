{
    //Symbol的概念:是es6的一种数据类型，

    //Symbol的作用：它提供一种独一无二的值
    //特性，如何使用，注意事项

    //第一种声明方法
    let a1=Symbol();
    let a2=Symbol();
    //a1 永远不能等于a2
    console.log(a1===a2);//false
    //第二种声明方法
    //for一般是用来声明key值

    let a3=Symbol.for('a3');//和之前声明值的不同在于，for在声明的时候会先检查它的值看是否之前声明过
    let a4=Symbol.for('a3');
    console.log(a4);//Symbol(a3)
    console.log(a4===a3);//true
}
{
    let a1=Symbol.for('abc');
    let obj={
        [a1]:'123',
        'abc':345,
        'c':456
    }
    console.log('a1',a1);//Symbol(abc)
    console.log('obj.abc',obj.abc);//345
    console.log('obj[a1]',obj[a1]);
    console.log('obj',obj);//{abc: 345, c: 456, Symbol(abc): "123"}
    //注意：对象中有用到symbol做key值的话
    //用for in/let of循环时用Symbol.for声明的key值在循环的时候是拿不到的
    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key,value);
    }
    //循环只拿到了如下2个属性，Symbol声明的属性没有拿到
    //let of abc 345
    //let of c 456


    //如果想拿到Symbol.for声明的key值，可以用这个循环Object.getOwnPropertySymbols(obj);//得到的结果是数组
    Object.getOwnPropertySymbols(obj).forEach(function(item){//因为拿到的是数组，所以用forEach遍历一下
        console.log(obj[item]);//123
    });

    //取出所有的值,即可以循环出Symbol.for声明的变量,也可以循环出非Symbol.for声明的变量
    Reflect.ownKeys(obj);//返回的也是数组，用forEach遍历一下
    Reflect.ownKeys(obj).forEach(function(item){
        console.log('ownkeys',item,obj[item]);
        /*
        * ownkeys abc 345
        * ownkeys c 456
        * ownkeys Symbol(abc) 123
        * */
    })
}