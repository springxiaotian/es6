{
    //iterator
    /*
    * for of 其实底层就是通过iterator接口这种方式的不断调用，
    * 从而达到循环的形式
    * 不同的数据结构通过for of达到读取不同数据结构但目标的循环形式，
    * 但背后的iterator接口是不一样的
    * */
}
{
    //iterator接口是什么
    let arr=['hello','world'];
    let map=arr[Symbol.iterator]();
    //调用该接口的方法，因为数组内部已经帮我们直接调用接口了，所以我们直接调用
    console.log('map_next',map.next());//map_next {value: "hello", done: false}
    console.log('map_next',map.next());//map_next {value: "world", done: false}
    console.log('map_next',map.next());//map_next {value: undefined, done: true}
    //第一个参数表示循环的值，第二个参数表示是否存在下一步，当没有可循环的项就会返回true,false表示循环没有结束
}
{
    //我们可以自定义iterator接口,让它可以使用（实现）for of 循环
    let obj={
        start:[1,3,2],
        end:[7,9,8],
        [Symbol.iterator](){//声明一个iterator接口方法
            let self=this;
            let index=0;
            let arr=self.start.concat(self.end);
            let len=arr.length;
            return {
                next(){
                    if(index<len){
                        return {
                            value:arr[index++],
                            done:false//f表示没结束
                        }
                    }else{
                        //说明遍历结束
                        return {
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
    for( let key of obj){
        console.log(key);//1,3,2,7,9,8
    }
}

//for of 循环
{
    let arr=['hello','world'];
    for(let value of arr){
        console.log('value',value);//value hello
                                   //value world
    }
}