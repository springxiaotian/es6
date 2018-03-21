{
    let regexp=new RegExp('xyz','i');
    let regexp1=new RegExp(/xyz/i);
    console.log(regexp.test('xyz123'),regexp1.test('xyz123'));//true true
    let regexp3=new RegExp(/xyz/ig,'i');//返回i,第二个参数会覆盖第一个参数的正则用到的修饰符，返回i
    console.log(regexp3.flags);//返回i  flags是es6中新增的用来获取正则对象修饰符的属性
}
//es6中增加了y，u,这2个修饰符，s是作为提案
{
    //y修饰符作用：y 修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的含义。
    let s='bbb_bb_b';
    let a1=/b+/g;//全局模式，他会忽略下划线
    let a2=/b+/y;//粘连模式，不会忽略下划线，一旦不匹配抛出null
    console.log("one"+a1.exec(s));
    console.log("one"+a2.exec(s));
    console.log("two"+a1.exec(s));
    console.log("two"+a2.exec(s));
    console.log("three"+a1.exec(s));
    console.log("three"+a2.exec(s));
    console.log("forth"+a1.exec(s));
    console.log("forth"+a2.exec(s));
    console.log("fifth"+a1.exec(s));
    console.log("fifth"+a2.exec(s));
    console.log("six"+a1.exec(s));
    console.log("six"+a2.exec(s));
    //如何查看正则对象是否具备y粘连模式
    console.log(a1.sticky);//false
    console.log(a2.sticky);//true
}

{
    //U修饰符作用,u其实代表unicode
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));//true  test里4个字节当成了2个字符
    console.log('u-q',/^\uD83D/u.test('\uD83D\uDC2A'));//false  u将4个字节当成了1个字符

    console.log(/\u{61}/.test('a'));//false
    console.log(/\u{61}/u.test('a'));//true 当{}中放的是unicode编码的话一定要放u修饰符，不然js解释器不识别

}
//关于.这个字符，原来在es5.代表全部字符，但在es6中只能够识别小于0，x，f的unicode的字符，如果unicode编码超过2个字节，那么就无法识别了
{
    let s="𠮷";//如果字符串中的字是大于2个字节的，要加上u字符，才能正确识别
    console.log(`\u{20BB7}`);
    console.log(`\u{20BB7}`);
    console.log('u',/^.$/.test(s));//u false
    console.log('u-2',/^.$/u.test(s));//u-2 true,判断确实是包含大于2个字节的字符
    console.log('test',/𠮷{2}/.test('𠮷𠮷'));//false  正则中本身就有大于2个字节长度的字符
    console.log('test',/𠮷{2}/u.test('𠮷𠮷'));//false  正则中本身就有大于2个字节长度的字符
//u，在es6.匹配小于2个字节长度的字符，es5中.匹配所有字符
}
//es6中s修饰符，换行，回车符，行分隔符，段分隔符
