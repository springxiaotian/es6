{
    /* Set 是Es6的新的数据结构，它类似于数组，
        特点：但是成员的值都是唯一的，没有重复的值。
        Set 本身是一个构造函数，用来生成 Set 数据结构。
        Object有个很重要的特点，key必须是字符串
        map是JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），
        但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。 map特点是key可以是任意的数据类型
    */
    let list=new Set();
    list.add(5);
    list.add(7);
    console.log(list);//Set(2) {5, 7}
    //当前变量存在几个元素，很像数组中的length属性
    console.log('size',list.size);//size 2
}
{
    let arr=[1,2,3,4,5];
    let list=new Set(arr);
    console.log(list);//Set(5) {1, 2, 3, 4, 5}
    console.log('list.size',list.size);//set 会对数组进行转化，转化为一个set集合
    //list.size 5
}
{
    //set中对元素必须是唯一的
    let list=new Set();
    list.add(1);
    list.add(2);
    list.add(1);//不报错，只是不生效，一般用于数组去重
    console.log(list);//Set(2) {1, 2}
    //重复声明的时候会对重复对数据不显示，并不会报错，如上例子只显示1，2

    let arr=[1,2,3,1,2];
    let list2=new Set(arr);//转换元素对时候不会做数据类型对转换
    console.log('list2',list2);//list2 Set(3) {1, 2, 3}
    //成功过滤1，2
    //转换时，不会做数据类型对转换
    let arr1=[1,2,3,1,'2'];
    let list3=new Set(arr1);
    console.log('list3',list3);//list3 Set(4) {1, 2, 3, "2"}
}
{
    //添加，移除，清空，判断
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);
    //判断set类型中是否存在and元素
    console.log('has',list.has('add'));//has true
    console.log('list',list);//Set(4) {"add", "delete", "clear", "has"}
    console.log('delete',list.delete('add'),list);//delete true Set(3) {"delete", "clear", "has"}
    console.log('clear',list.clear(),list);//clear undefined Set(0) {}
}
{
    //set实例的遍历
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);
    for (let key of list.keys()) {
        console.log('keys', key);
        /**
         keys add
         keys delete
         keys clear
         keys has
         **/
    }
    for (let value of list.values()) {//value和key一样的结果（同上）
        console.log('value', value);
        /**
         value add
         value delete
         value clear
         value has
         **/
    }
    for (let value of list) {//不写value也行
        console.log('value', value);
        /**
         value add
         value delete
         value clear
         value has
         **/
    }
    for (let value of list.entries()) {//不写value也行
        console.log('list.entrie', value);
        /**
         list.entries  ["add", "add"]
         list.entries ["delete", "delete"]
         list.entries ["clear", "clear"]
         list.entries ["has", "has"]
         **/
    }
    list.forEach(function (item) {
        console.log(item);
        /*
         add
         delete
         clear
         has
        * */
    })
}
{
    //weakSet()也是不重复的值的集合。
    let weakList = new WeakSet();
    /*
     * WeakSet和Set的区别
     * 1、支持的数据类型不一样，WeakSet的元素只能是对象，而不能是其他类型的值。
     * 2、WeakSet声明的对象是弱引用，它不会检测该对象是否有在其他的地方用过，
     * 它不会和垃圾回收机制挂钩即添加对象的时候不是值的拷贝，而是地址的引用；
     * 它也不会检测该地址是否已经被垃圾回收掉了。
     * 3、没有size的属性也没有那些方法；
     * 4、它只能放对象
     * 5、没有没有clear()，没有set属性，不能遍历，
     * 6、has(),delete(),set()和
     * */
    let arg = {};
    weakList.add(arg);
    console.log('weakList', weakList);//WeakSet {{…}}
    /*WeakSet {{…}}
        __proto__:WeakSet
        [[Entries]]:Array(1)
            0:Object
            length:1
     */

    //增加的值只能是对象
    //weakList.add(2);
    console.log('weakList', weakList);//Uncaught TypeError: Invalid value used in weak set
}
{
    //map（）JavaScript 的对象（Object），
    // 本质上是键值对的集合（Hash 结构），
    // 但是传统Object上只能用字符串当作键。这给它的使用带来了很大的限制。
    //Map的key可以是各种类型的，包括对象都可以用作key，它都范围不仅仅限于
    let map=new Map();//第一种定义方式
    let arr=['123'];
    map.set(arr,456);//别弄混set添加元素用add(),map添加元素用set();用数组arr做key,value是456
    console.log('map',map,map.get(arr));//get()获取值
    /*返回如下
    * map Map(1) {Array(1) => 456} 456
    * */
}
{
    //第二种方式声明Map()
    let map=new Map([['a',123],['b',456]]);
    console.log('map args',map);//map args ,Map(2) {"a" => 123, "b" => 456}
    //常用的属性和方法
    console.log('size',map.size);//获取长度 返回 2
    console.log('get',map.get('a'));//get()获取值，返回123
    console.log('delete',map.delete('a'),map);//删除delete() 返回delete true Map(1) {"b" => 456}
    console.log('clear',map.clear(),map);//清空clear()  返回clear undefined Map(0) {}
}
{
    let weakmap=new WeakMap();//key必须是对象，不能是其他的，没有size,
    let o={};
    weakmap.set(o,123);
    console.log(weakmap.get(o));//123
}
{
    //map,Array数据结构横向对比：增删改查
    let map=new Map();
    let array=[];
    //增
    map.set('t',1);
    array.push({t:1});
    console.info('map',map);// {"t" => 1}
    console.info('array',array);//[{t:1}]
    //查
    let map_exist=map.has('t');
    let array_exist=array.find(item=>item.t);//遍历数组的每一个元素如果存在该key值那么说明存在
    console.log('map_exist',map_exist);//返回布尔值 map_exist true
    console.log('array_exist',array_exist);//如存在将存在的值返回 array_exist {t: 1}

    //改
    map.set('t',2);
    array.forEach(item=>item.t?item.t=2:'');
    console.log('map',map);//map Map(1) {"t" => 2}
    console.log('array',array);//array [{t:2}]

    //删
    map.delete('t');
    let index=array.findIndex(item=>item.t);//查找数组中每一个带有t的元素
    array.splice(index,1);
    console.log('map',map);//map Map(0) {}
    console.log('array',array);//array []
}

{
    //set 和array的对比
    let set=new Set();
    let array=[];

    //增
    set.add({t:1});
    array.push({t:1});
    console.log('set',set);//{Object {t: 1}}
    console.log('array',array);//array [{t:1}]

    //查
    let set_exist=set.has({t:1});
    let array_exist=array.find(item=>item.t);
    console.log('set_exist',set_exist);//false
    console.log('array_exist',array_exist);//array_exist {t: 1}

    //改
    set.forEach(item=>item.t?item.t=2:'');
    array.forEach(item=>item.t?item.t=2:'');
    console.log('set_modify',set);//{Object {t: 1}}
    console.log('array_modify',array);//array [{t:2}]

    //删
    set.forEach(item=>item.t?set.delete(item):'');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.log('set_delete',set);//Set(0) {}
    console.log('array_delete',array);//[]
}
{
    //map,set,object对比
    let item={t:1};
    let map=new Map();
    let set=new Set();
    let obj={};

    //增
    map.set('t',1);
    set.add(item);
    obj['t']=1;

    console.log('map',map);//Map(1) {"t" => 1}
    console.log('set',set);//Set(1) {{t:1}}
    console.log('obj',obj);//{t: 1}

    //查
    console.log(map.has('t')); //true
    console.log(set.has(item));//true
    console.log('t' in obj);//true

    //改
    map.set('t',2);
    item.t=2;
    obj['t']=2
    console.log('map',map);//Map(1) {"t" => 2}
    console.log('set',set);//Set(1) {{t:2}}
    console.log('obj',obj);//{t: 2}

    //删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log('map',map);//Map(0) {}
    console.log('set',set);//Set(0) {}
    console.log('obj',obj);//{}

}
/*
* 数据开发中：尽量使用map，不用数组
* 对数据结构要求存储的唯一性，建议使用set,放弃用obj,和数组
* */