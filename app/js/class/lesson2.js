{
    let a,b,c,rest;
    [a,b]=[1,2];
    console.log(a);//1
    console.log(b);//2
}
//数组解构赋值
{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    console.log(a,b,rest);
}
//对象解构赋值
{
    let a,b;
    ({a,b}={a:1,b:2})
    console.log(a,b);
}
{
    let a,b,c,rest;
    [a,b,c=3]=[1,2];//c=3是给c设置默认值
    console.log(a);//1
    console.log(b);//2
    console.log(c);
    //undefined ,解构赋值没有配对的值，返回undefined
}
{
    //可通过变量位置的交换，省却中间变量的设置
    let a=1;
    let b=2;
    [a,b]=[b,a];
    console.log(a,b);//2,1
}
{
    function f(){
        return [1,2];
    }
    let a,b;
    [a,b]=f();
    console.log(a,b);//1,2
}
{
    //当返回多个值时，可选择性接收某几个变量；
    function f(){
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,,,b]=f();
    console.log(a,b);//1,4
}
{
    //当返回多个值时，可选择性接收某几个变量；
    function f(){
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,...b]=f();
    console.log(a,b);//1,3,4,5(没有2，因为2是undefined)
}
{
    //当返回多个值时，可选择性接收某几个变量；
    function f(){
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,,...b]=f();//1,3,4,5
    console.log(a,b);//1,3,4,5
}
//对象解构赋值
{
    let o={p:42,q:true};
    let {p,q}=o;
    console.log(o);
}
{
    let {a=10,b=5}={a:3};//a被重新赋值
    console.log(a,b);//3,5
}
{
    let metaData={
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]}=metaData;
    console.log(esTitle,cnTitle);
}