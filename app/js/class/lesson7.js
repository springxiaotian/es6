{
    //函数参数默认值
    function test(x,y='world'){
        //y的写法是添加了默认值world,注意，如果说参数中默认值一遍是最后一个参数可以添加，如果写成
        //(x,y='world',z)这是不可以的，但可以写成（(x,y='world',z="123"）
        console.log('默认值',x,y);
    }
    test('hello');//hello world
    test('hello','kill');//hello kill
}
{
    let x='test';
    function test2(x,y=x){
        console.log('作用域',x,y);
    }
    test2('kill');//kill kill
    test2();//undefined undefined
    //不传参数也不会取全局变量
}
{
    //在你不确定有多少个参数但时候，将参数转换成一个数组；
    function test3(...arg){
        for(let v of arg){
            console.log('rest',v);
        }
    }

    test3(1,2,3,4,'a');//rest 1 rest 2 rest 3 rest 4 rest a
}
{
    //将数组转换成离散但值
    console.log(...[1,2,4]);//1 2 4
    //将离散但值转换成数组
    console.log('a',...[1,2,3]);//a 1 2 3
}
//尖头函数
{
    let arrow = v => v*2;//尖头函数的三个部分：箭头名，箭头参数，函数返回值
    console.log('arrow',arrow(3));//arrow 6
    let arrow2=()=>5;
    console.log('arrow2',arrow2());
}
{
    //伪调用:函数的最后是不是一个函数,一般用来提升性能
    //使用场景：一个函数依赖于另一个函数的调用，可以提升性能
    function tail(x) {
        console.log('tail', x);
    }
    function fx(x){
        return tail(x);
    }
    fx(123);
}