{
    //简介表示法
    let o=1;
    let k=2;
    let es5={
        o:o,
        k:k
    };
    let es6={
        o,
        k
    }
    console.log('es5',es5);//es5 {o: 1, k: 2}
    console.log('es6',es6);//es6 {o: 1, k: 2}
    let es5_method={
        hello:function(){
            console.log('helloes5');
        }
    }
    let es6_method={
        hello(){
            console.log('helloes6');
        }
    }
    console.log(es5_method.hello(),es6_method.hello());
}
{
    //属性表达式
    let a='b';
    let es5_obj={
        a:'c',
        b:'c'
    }
    let es6_obj={
        [a]:'c'
    }
    console.log(es5_obj);//{a: "c", b: "c"}
    console.log(es6_obj);//{b: "c"}
}
{
    //判断2个参数是否相等
    //Object.is()与===功能一致
    console.log('string',Object.is('abc','abc'),'abc'==='abc');//true
    console.log('数组',Object.is([],[]),[]===[]);//false 因为是引用类型

    //将2个对象变成一个对象用Object.assign()实现拷贝功能；
    //该方法只能copy自身对象的属性，不copy继承来的属性，也不copy不可枚举的属性
    console.log('copy',Object.assign({a:'a'},{b:'b'}));//{a: "a", b: "b"}

    let test={k:123,o:456};
    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);//["k", 123],["o", 456]
    }
}
{
    //扩展运算符
    let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
    console.log(c);
}
