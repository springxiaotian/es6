{
    //Decorator是修饰器
    //Decorator它是一个函数，
    //用来修改类的行为
    //Decorator它只在类的范畴生效，其余地方不生效
}
{
//babel-polyfill 打补丁的时候找不到Decorator的语法，因此需要安装一个插件
    /*
    npm install babel-plugin-transform-decorators-legacy --save-dev
    安装后，记得在tasks文件夹中的babelrc，文件中添加新安装的插件
    {
        "presets":["es2015"],
        "plugins":["transform-decorators-legacy"]
    }*/
}
{
    //限制某个属性是只读的
    let readonly=function(target,name,descriptor){
        //target，就是会被修饰的类,修改的本身。
        //name，修改了什么属性名称
        //descriptor//该属性的描述对象
        // descriptor对象原来的值如下
        // {
        //   value: specifiedFunction,
        //   enumerable: false,
        //   configurable: true,
        //   writable: true
        // };
        descriptor.writable=false;
        return descriptor;
    }
    class Test{
        @readonly//引入修饰器，因为加了修饰器那么不可以重新赋值
        time(){
            return '2017-03-11'
        }
    }
    let test=new Test();
    console.log(test.time());//2017-03-11
    /*test.time=function(){
        console.log('reset time');
    }*/
    console.log(test.time());//报错
    //不允许重新赋值给只读属性的方法
}
{
    let typename=function(target,name,descriptor){
        target.myname='hello';
    }
    @typename
    class Test{

    }
    console.log('类修饰符',Test.myname);//类修饰符 hello
}
{
    /*
    * 第三方库修饰的js库：core-decorators;//第一种方法引入js
    * npm install core-decorators//第二种方法，npm 安装，应用的页面 import core-decorators 即可
    * */
}
{
    //实用案例
    let log=(type)=>{
        return function(target,name,descriptor){
            let src_method=descriptor.value;//先执行它的value ,//返回ad is show/ad is click
            descriptor.value=(...arg)=>{
                src_method.apply(target,arg);
                console.log(`log ${type}`);//再执行log show/log click
            }
        }
    }
    class AD{
        @log('show')
        show(){
            console.info('ad is show');
        }
        @log('click')
        click(){
            console.log('ad is click');
        }
    }
    let ad=new AD();
    ad.show();
    ad.click();
    /*
    * ad is show
      log show
      ad is click
      log click
    *
    * */
}
