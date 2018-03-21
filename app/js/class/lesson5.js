{
    //es6多进制的表示方法
    console.log(0b111110111);//10进制用2进制的表示方法用0b  返回303
    console.log(0o767);//10进制用8进制的表示方法用0o  返回303
    //0b 0B
    //0o 0O
    //不区分大小写
}
{
    console.log('15',Number.isFinite(15));//判读啊你是否是无穷尽
    console.log('NaN',Number.isFinite(NaN));//NaN 本身不是一个数，返回false
    console.log('1/0',Number.isFinite('true'/0));//NaN 本身不是一个数，返回false
    console.log('NaN',Number.isNaN(NaN));//判断一个数是否是非数字,返回NaN true
    console.log('0',Number.isNaN(0));//判断一个数是否是数,返回0 false
}
{
    //判断一个数是否是整数
  console.log('25',Number.isInteger(25));//true
  console.log('25.0',Number.isInteger(25.0));//true
  console.log('25.1',Number.isInteger(25.1));//false
  console.log('25.1',Number.isInteger('25.1'));//false
  console.log('25.1',Number.isInteger('25.0'));//false
}
{
    //表示数值的最大上线
    console.log(Number.MAX_SAFE_INTEGER);//上限9007199254740991
    console.log(Number.MIN_SAFE_INTEGER);//下限-9007199254740991
    //es6中判断数据是否是有效安全的,它的参数一定是数字
    console.log('10',Number.isSafeInteger(10));//true
    console.log('a',Number.isSafeInteger('a'));false
}
{
    //返回小数的整数部分,不四舍五入，只取整数部分
    console.log('4.1',Math.trunc(4.1));// 4
    console.log('4.9',Math.trunc(4.9));// 4
}
{
    //判断一个数是正/负/0/NaN
    //通过返回的数是0，1，-1,NaN就可以判断该数字是正数，负数，还是0,或非数字
    //参数必须是数字
    console.log('-5',Math.sign(-5));//-1
    console.log('0',Math.sign(0));//0
    console.log('5',Math.sign(5));//1
    console.log('5',Math.sign('5'));//1，传入字符串返回1
    console.log('foo',Math.sign('foo'));//NaN，传入字符串返回1
}
{
    //求立方根的计算，Math.cbrt()
    console.log('-1',Math.cbrt(-1));//-1
    console.log('8',Math.cbrt(8));//2
}
