import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';//引入能作为启动服务器的包，可理解为启动脚本作为服务器的功能
import args from './util/args';

gulp.task('serve',(cb)=>{//创建serve任务
    if(!args.watch) return cb();//如果不是处于监听状态下,直接返回回调函数
    var server=liveserver.new(['--harmony','server/bin/www']);//如果处于监听情况下，用liveserver创建server服务器
    //--harmony在当前命令行下执行该脚本
    //server/bin/www是一个js脚本，它的目录在server/bin/www.js.服务器最终启动的其实是这个服务器脚本
    server.start();//启动服务器
    //构建脚本目的是：server服务器下的所有文件js，ejs模版引擎，css，改变时需要浏览器自动刷新
    //因此需要监听server服务器下的所有文件js，ejs模版引擎
    //如何监听，且让其自动刷新
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){//做文件的监听
        //第一个参数2个数组表示告诉gulp.watch我要监听哪些路径
        //实际路径下的public文件一般做监听，view文件做模版
        server.notify.apply(server,[file]);
        //*监听后要将改动告诉服务器，通知服务器我的文件已做相应改变，让服务器做相应的处理*/
    })
    /*服务器中的路由，接口，发生变化，这时刷新浏览器不好使，需要重启server生效*/
    //所以需要监听需要重启服务的文件
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        //server/routes是服务器的脚本文件，做接口用的
        //server/app是整个服务启动的入口文件
        //如上2个发生改变都需要服务重新启动才能生效
        /*怎么样监听变化后让服务器重启*/
       server.start.bind(server)();// 调用server的start api重启
    })
})

/*接下来如何让我们写好的任务自动完成*/