{
    //Proxy Reflect
    /*
    * Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，
    * 因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，
    * 用在这里表示由它来“代理”某些操作，可以译为“代理器”。
     */

    /*
    * Reflect即反射，它反射的是object
    * */
}
{
    //创建一个类似于供应商的属性,即原始对象，存储真实的数据
    let obj={
        time:'2017-03-11',
        name:'net',
        _r:123
    }
    //创建代理商，即Proxy对象
    let monitor=new Proxy(obj,{
        //实现真正要代理的东西
        //拦截对象属性的读取
        get(target,key){
            return target[key].replace('2017','2018');
        },
        //拦截对象设置属性
        set(target,key,value){//target指代obj,key是obj的属性，value是obj的值
          if(key==='name'){
              return target[key]=value;
          }else{
              return target[key];
          }
        },
        //判断当前对象中是否拥有某个属性
        //拦截key in obj 的操作
        has(target,key){
            if (key === 'name') {
                return target[key];
            } else {
                return false;
            }
        },

        //拦截 obj.prop，需要用到如下方法去拦截对对象对删除操作
        deleteProperty(target,key){
            //需求：如果属性是下划线开通对就删除，不是下划线对就不删除
            if(key.indexOf('_')>-1){
                delete target[key];
                return true;
            }else{
                return target[key];
            }
        },
        //拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='time');//有time就不返回
        }
    });

    //对用户来说就是直接操作monitor对象，读取或设置，都是通过Proxy来传递
    //monitor.time
    console.log('monitor_get',monitor.time);//monitor 2018-03-11
    monitor.time='2018';
    monitor.name='mukewang';
    console.log('monitor_set',monitor.name,monitor);
    //monitor_set mukewang Proxy {time: "2017-03-11", name: "mukewang", _r: 123}
    console.log('has','name' in monitor,'time' in monitor);//has true false

    //删除
  /*  delete monitor.time;
    console.log('delete',monitor);//delete Proxy {time: "2017-03-11", name: "mukewang", _r: 123}
    delete monitor._r;
    console.log('delete',monitor);*///delete Proxy {time: "2017-03-11", name: "mukewang"}
    console.log('ownKeys',Object.keys(monitor));//ownKeys (2) ["name", "_r"]
}
{
    let obj={
        time:'2017-03-11',
        name:'net',
        _r:123
    }
    //用Reflect读取对象
    console.log('Reflect_get',Reflect.get(obj,'time'));//Reflect_get 2017-03-11
    Reflect.set(obj,'name','慕课网');
    console.log(obj);//{time: "2017-03-11", name: "慕课网", _r: 123}
    console.log('Reflect_has',Reflect.has(obj,'name'));//Reflect_has true
}

{
    //需求：校验demo
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)){
                    let va=this._validator[key];
                    if(!!va(value)){
                        return Reflect.set(target,key,value,proxy);
                    }else{
                        throw Error(`不能设置${key}到${value}`);
                    }
                }else{
                    throw Error(`${key} 不存在`);
                }
            }
        });
    }
    const personValidators={
        name(val){
            return typeof val==='string';
        },
        age(val){
            return typeof val==='number' && val>18;
        },
        mobile(val){
            return val;
        }
    }
    class Person{
        constructor(name,age){
            this.name=name;
            this.age=age;
            this.mobile='111';
            return validator(this,personValidators);
        }
    }
    const person=new Person('lilei',30);
    console.log('person',person);//person Proxy {name: "lilei", age: 30}

  //  person.name=48;//报错 Uncaught Error: 不能设置name到48

    person.name="hanmeimei";
    console.log('person',person);
}