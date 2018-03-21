//很多数据需要从后台的接口获取，需要建立该模块用来处理接口数据，接口模块
import $ from 'jquery';//引入jquery 模块，给他取名字"$"

/*
* //issue代表11选5项目的期号，
* 每十分钟销售一期，销售后开一次号码，所以状态和数据都和当前的期号密切相关
* 接口的数据都会更新一次，保存一次
* */
class Interface{//定义一个class
    //如没有强调构造函数，可以不加构造函数
    /*
    * [getOmit 获取遗漏数据]
    * @param {string} issue [当前期号]
    * @return {[type]} [description]
    * */
    getOmit(issue){//类的声明中的方法的声明，方法名+（）+{}，三个方法之间不需要逗号分隔
        let self=this;
        return new Promise((resolve,reject)=>{
            /*
            * 需注意，之所以在尖头函数外部保存this，
            * 是因为箭头函数中的this是在定义函数的时候指定的，
            * 而不是在运行调用的时候指定的
            * */
            $.ajax({
                url:'/get/omit',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setOmit(res.data);//setOmit是lottery.js继承的其他的4个文件中的其中一个类的一个的方法
                    resolve.call(self,res);
                },
                error:function(err){
                    //如果出错类就阻塞下一步，执行reject
                    reject.call(err);
                }
            })
        });
    }
    //获取开奖号码接口
    /*
     * [getOpenCode 获取开奖号码]
     * @param {string} issue [期号]
     * @return {[type]} [description]
     * */
    getOpenCode(issue){
        let self=this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/opencode',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setOpenCode(res.data);//保存当前的开奖号码；
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        });
    }
    //获取当前状态接口
    /*
     * [getState 获取当前状态]
     * @param {string} issue [当前期号]
     * @return {[type]} [description]
     * */
    getState(issue){
        let self=this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/state',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        });
    }
}
export default Interface;