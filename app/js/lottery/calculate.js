//用来进行彩票盈利计算的模块
class Calculate{
    /*
     * [computeCount 计算注数]
     * @param  {number} active    [当前选中的号码]
     * @param  {string} play_name [当前的玩法标识]
     * @return {number}           [注数]
     * */
    computeCount(active,play_name){
        /*
        * active:表示当前选中号码的个数，
        * play_name:项目中"任二-——任八"中当前被选中的那个项;
        * 确定了玩法，确定了用户选中号码的个数，就能够酸楚注数，金钱
        * */
        let count=0;//声明默认注数
        const exist=this.play_list.has(play_name);//判断玩法列表中是否存在play_name
        //生成数组
        const arr=new Array(active).fill('0');//es6数组初始化的时候允许传入一个参数就是数组的长度
        //上面是一个指定长度为被选中的号码的个数为长度的数组，各元素默认均为0
        if(exist && play_name.at(0)==='r'){//当前玩法是否支持，并且判断当前玩法是否是r
            count=Calculate.combine(arr,play_name.split('')[1]).length;
        }
        return count;
    }


    //计算金额范围预测

    /*
     * [computeBonus 奖金范围预测]
     * @param  {number} active   [当前选中的号码]
     * @param  {string} play_name [当前的玩法标识]
     * @return {number}      [奖金范围]
     * */
    computeBonus(active,play_name){
        const play=play_name.split('');//获取玩法的分类
        const self=this;
        let arr=new Array(play[1]*1).fill(0);
        let min,max;
        if(play[0]==='r'){
            let min_active=5-(11-active);//最小命中数
            if(min_active>0){
                if(min_active-play[1]>0){//最小命中数减去当前玩法的基数是否大于0
                    arr=new Array(min_active).fill(0);//es6初始化数组的填充功能
                    min=Calculate.combine(arr,play[1]).length;
                }else{
                    if(play[1]-5>0 && active-play[1]>=0){
                        arr=new Array(active-5).fill(0);
                        min=Calculate.combine(arr,play[1]-5).length;
                    }else{
                        min=active-play[1]>-1?1:0;
                    }
                }
            }else{
                min=active-play[1]>-1?1:0;
            }
            let max_active=Math.min(active,5);
            if(play[1]-5>0){
                if(active-play[1]>=0){
                    arr=new Array(active-5).fill(0);
                    max=Calculate.combine(arr,play[1]-5).length;
                }else{
                    max=0;
                }
            }else if(play[1]-5<0){
                arr=new Array(Math.min(active,5)).fill(0);
                max=Calculate.combine(arr,play[1]).length;
            }else{
                max=1;
            }
        }
        return [min,max].map(item=>item*self.play_list.get(play_name).bonus);
    }

    /*
     * [combine 组合运算]
     * @param  {array} arr   [参与组合运算的数组]
     * @param  {number} size [组合运算的基数]
     * @return {number}      [计算注数]
     * */
    static combine(arr,size){
        let allResult=[];//最后结果
        (function f(arr,size,result){//es6中的函数必须有名字，在该处命名为f，es6在递归的时候要用匿名函数，否则报错
            let arrLen=arr.length;//判断传入数组长度
            if(size>arrLen){//长度小于size,
                return;//截止递归
            }
            if(size===arrLen){//size等于数组长度
                allResult.push([].concat(result,arr));//将结果和数组保存在最终的数组中
            }else{
                for(let i=0;i<arrLen;i++){
                    let newResult=[].concat(result);//不断生成新数组的过程
                    newResult.push(arr[i]);
                    if(size===1){//检测当前长度是否等于1
                        allResult.push(arr[i]);
                    }else{//不等于1时，和上一步操作一样
                        let newArr=[].concat(arr);
                        newArr.splice(0,i+1);
                        f(newArr,size-1,newResult);//再次递归的时候会将当前的size-1,重新在新的子集上运算，再保存上次运算的结果
                    }
                }
            }
        })(arr,size,[])
        return allResult;
    }
}
export default Calculate;