//用来做定时器倒计时
class Timer{
    countdown(end,update,handle){//截止时间，更新回调，倒计时结束回调
        const now=new Date().getTime();//取当前时间；
        const self=this;//获取当前对象指针
        if(now-end>0){//如果当前时间大于截止时间，说明倒计时结束
            handle.call(self);//执行倒计时结束的回调
        }else{//倒计时没有结束
            let last_time=end-now;//判断当前时间距离截止时间的剩余时间
            const px_d=1000*60*60*24;//记录一天是多少毫秒（1天24小时，1小时60分钟，1分钟60秒，1秒是1000毫秒）
            const px_h=1000*60*60;//1天的时间和1小时的时间差24倍（表示小时）
            const px_m=1000*60;//分钟和小时的关系是60倍（表示分）
            const px_s=1000;
            let d=Math.floor(last_time/px_d);//看看剩余时间包含多少天
            let h=Math.floor((last_time-d*px_d)/px_h);//剩余多少小时
            let m=Math.floor((last_time-d*px_d*px_h)/px_m);//剩余的分钟数
            let s=Math.floor((last_time-d*px_d*px_h-m*px_m)/px_s);//剩余秒数
            let r=[];//值保存值结果中
            if(d>0){
                r.push(`<em>${d}</em>天`);//保存多少天，如果天是0，那么
            }
            if(r.length||(h>0)){//如果没有时的时候，
                //保存多少小时
                r.push(`<em>${h}</em>时`);
            }
            if(r.length||(m>0)){//如果没有分的时候，
                //保存多少小时
                r.push(`<em>${m}</em>分`);
            }
            if(r.length||(m>0)){//如果没有秒的时候，
                //保存多少小时
                r.push(`<em>${s}</em>秒`);
            }
            self.last_time=r.join('');
            update.call(self,r.join(''));
            setTimeout(function(){
                self.countdown(end,update,handle);
            },1000)
        }
    }
}
export default Timer;