{
    //Array.of方法用于将一组值，转换为数组。
    let arr=Array.of(3,4,7,9,11);//[3, 4, 7, 9, 11]
    console.log('arr=',arr);
    let empty=Array.of();
    console.log('empty',empty);//[] 不传参数返回空数组
}
{
    //Array.from()将类数组或集合转换成真正的数组
    let p=document.querySelectorAll('p');
    let pArr=Array.from(p);
    pArr.forEach(function(item){
        console.log(item.textContent);
    })
    //Array.from()的map(映射)的用法
    console.log(Array.from([1,3,5],function(item){return item*2}));//将第一个参数数组遍历了一下，然后返回的值是值原有的基础上做了一个映射的关系；
}
{
    //实现元素替换
    console.log('fill-7',[1,'a',undefined].fill(7));//[7, 7, 7] 将第二个参数全部变成7

    console.log('fill,pos',['a','b','c'].fill(7,1,3));// ["a", 7, 7]
    //3代表，从下标位置1开始到位置3结束，都换成7
}
{
    //和遍历相关的三个元素
    //keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
    for(let index of ['1','c','ks'].keys()){//keys()代表键名
        console.log('keys',index);//0,1,2
    }
    for(let index1 of ['u','9','w'].values()){//values()是对键值的遍历，存在浏览器兼容问题
        console.log('',index1);//u 9 w
    }
    for(let index2 of ['s','k','123'].entries()){
        console.log('entries',index2);//既可以打印索引，也可以打印出来值
    }
}
{
    //数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
    //target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
    //start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
    //end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
    //Array.prototype.copyWithin(target, start = 0, end = this.length)
    console.log([1,2,3,4,5].copyWithin(0,3,4));//
}
{
    //判断某个元素是否在数组中,只匹配找到的第一个抛出来
    console.log([1,2,3,4,5,6].find(function(item){return item>3;}));
    //与上面不同的是返回匹配的第一个元素的下标
    console.log([1,2,3,4,5,6].findIndex(function(item){return item>3;}));
}
{
    console.log('number',[1,2,NaN].includes(1));//包括该值，且和该值相等 返回true
    console.log('number',[1,2,NaN].includes(NaN));//包括该值，且和该值相等 返回true
}