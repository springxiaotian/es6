{
    //类的基本定义和生成实例
    class Parent{//定义
        //区别：es5通过this定义，es6通过class定义
        //定义构造函数
        constructor(name='mukewang'){//通过构造函数传入参数
            this.name=name;
        }
    }
    let v_parent=new Parent('v');
    console.log('构造函数和实例',v_parent);//构造函数和实例 Parent {name: "v"}
}
{
    //继承
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }
    }
    class Child extends Parent {

    }
    console.log('继承', new Child());//继承 Child {name: "mukewang"}
}

{
    //继承传递参数，子类覆盖父类参数到值
    //子类构造函数中去将参数传递给父类会用到super
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }
    }
    class Child extends Parent {
        constructor(name = 'child') {
            super(name);//super中到参数列表就是父类构造函数到参数列表，必须放在子类构造函数的第一行
            //如果子类还想增加自己的属性type
            this.type = 'child';//定义自己属性调用this时要放到super后面，
        }
    }
    console.log('覆盖父类的继承', new Child());//覆盖父类的继承 _Child {name: "child", type: "child"}
    console.log('覆盖父类的继承', new Child('hello'))///参数会覆盖默认值 覆盖父类的继承 _Child {name: "hello", type: "child"}
    //变成了hello
}

{
    //class中的getter,setter
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }
        get longName(){//定义getter,它并不是一个方法，它是属性，不是一个函数
            return 'mk'+this.name;//需求：在所有this.name前加mk
        }
        set longName(value){
            this.name=value;
        }
    }
    let v=new Parent();
    console.log('longName_getter',v.longName);//longName_getter mkmukewang
    v.longName='hello';
    console.log('longName_setter',v.longName);//longName_setter mkhello
}
{
    //类的静态方法的使用
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }
        //静态方法的定义需要用到static
        static tell(){//这是一个方法，加类static的方法就是一个静态的方法
            //注意：静态方法是通过类前调用，而不是通过类的实例去调用
            console.log('tell');//执行的内容
        }
    }
    Parent.tell();//tell
}
{
    //静态属性，它和静态方法可以相提并论
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }
        static tell(){//给类添加静态方法
            console.log('tell');
        }
    }
    Parent.type='test';//给类添加静态属性，需要这样定义
    console.log('静态属性',Parent.type);//静态属性 test
}