{
    //字符unicode的表示方法
    console.log('a',`\u0061`);//a a
    console.log('s',`\u20BB7`);//返回s ₻7，因为\u20BB7的值超过了0xFFFF，20BB作为一个字符，7是2个字节，相当于当成了2个字符，u不是Unicode编码，没有对应的字符前面没有对应的编码因此返回一个₻
    console.log('s',`\u{20BB7}`);
    /*
  * 在es6中如何处理 Unicode编码大于0xFFFF的：
  * 即用{}将Unicode编码包起来即可
  * */
}
//这里没听懂，回听
{
    let s='𠮷';//该文字的码值大于2个字节
    console.log('length',s.length);//返回2，在处理长度的时候每2个字节是一个长度；
    console.log('0',s.charAt(0));//取第0个字符
    console.log('1',s.charAt(1));//取第1个字符
    console.log('at0',s.charCodeAt(0));//取Unicode编码的第0个码值,
    console.log('at1',s.charCodeAt(1));//取Unicode编码的第1个码值   charCodeAt取2个字节

    //es6中如何处理该值
    let s1='𠮷a';
    console.log('length',s1.length);//3
    console.log('code0',s1.codePointAt(0));//code0 134071    取字符的码值
    console.log('code0',s1.codePointAt(0).toString(16));//code0 20bb7    取字符的码值转换成16进制
    //codePointAt取4个字节
    console.log('code1',s1.codePointAt(1));//codePointAt(1)==charCodeAt(0)
    console.log('code2',s1.codePointAt(2));//codePointAt(1)==charCodeAt(0)
}


{
    //给了码值打印对应的字符，如下2者区别在于能否处理大于0xFFFF的Unicode字符
    console.log(String.fromCharCode('0x20bb7'));//ஷ   es5
    console.log(String.fromCodePoint('0x20bb7'));//𠮷   es6
}

{
    //字符串遍历器
    let str='\u{20bb7}abc';
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }
    for(let code of str){
        console.log('es6',code);
    }
}
{
    let str='string';
    console.log('str',str.includes('r'));//判断字符串是否包含r
    console.log('str',str.startsWith('str'));//判断字符串是否以str开始的
    console.log('str',str.endsWith('ng'));//判断字符串是否以ng结束的
}
//重复
{
    let str='abc';
    console.log(str.repeat(6));//复制str 六次
}
//模版字符串：将数据和模版拼接成一个带有结果的字符串
{
    let name='list';
    let info='hello world';
    let m=`i am ${name},${info}`;
    console.log(m);
}
{
    console.log('1'.padStart(2,'0'));//补白，padStart满足第一个参数指定的长度是2，不足2个长度，用前面0来补
    console.log('t'.padStart(5,'0'));//补白，padStart满足第一个参数指定的长度是2，不足2个长度，用前面0来补
    console.log('w'.padEnd(5,'0'));//补白，padStart满足abc`i am ${user.name},${user.info}`;第一个参数指定的长度是2，不足2个长度，后面用0来补
}

{
    let user={
        name:'list',
        info:'hello world'
    };
    abc`i am ${user.name},${user.info}`;
    function abc(s,v1,v2){
        console.log(s,v1,v2);
       // return s+v1+v2;
    }
   // console.log(abc`i am ${user.name},${user.info}`);
}
{
    console.log(String.raw`Hi\n${1+2}`);//raw 的api 对所有对"\"都进行了转义，所以"\"在raw中是无效的
    console.log(`Hi\n${1+2}`);
}