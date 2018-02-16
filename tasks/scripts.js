/*这是一个脚本服务的文件*/
import gulp from 'gulp';    /*因为会用到gulp,所以需要引入*/
import gulpif from 'gulp-if';   /*if语句中做if判断的*/
import concat from 'gulp-concat';    /*gulp中处理文件拼接的*/
import webpack from 'webpack';  /*所有打包工具都是webpack做的所以要引入webpack工具包*/
import gulpWebpack from 'webpack-stream';   /*gulp处理的文件流，它基于stream,  打包流 */
import named from 'vinyl-named';    /*对文件重命名做标志的包*/
import livereload from 'gulp-livereload'; /*热更新包，文件修改后自动更新*/
import plumber from 'gulp-plumber' ;/*处理文件信息流*/
import rename from 'gulp-rename';/*文件重命名包*/
import uglify from 'gulp-uglify';/*处理js，css压缩的*/
import {log,colors} from 'gulp-util';/*命令行工具输出包*/
import args from './util/args';/*对命令行参数解析的包*/

gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js'])//打开app/js/index.js下的目录
    //处理常规错误逻辑，出现错误就要抛出异常用gulp-plumber处理,如下做法可以改变常规（默认）处理异常的机制
        //自定义处理异常方法
    .pipe(plumber({
        errorHandle:function(){//默认错误的处理，这里需要结合webpack做

        }
    }))
    .pipe(named())//重命名
    .pipe(gulpWebpack({//用webpack对内容进行重新编译
        module:{
            loaders:[{//遇到js时用babel进行处理
                test:/\.js$/,
                loader:'babel-loader'
            }]
        }
    }),null,(err,stats)=> {//第三个参数是用来处理错误的时候的情况
        log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
            chunks: false
        }))
    })
    //文件编译后的存放位置 用gulp.dest命令指定路径，将编译好的内容写入指定路径
    .pipe(gulp.dest('server/public/js'))//路径写到server下的原因是，因为server拿到最新的编译后的内容，才能在整个服务端跑起来
    //备份刚刚编译好的文件//还需要一个处理编译压缩的过程，可放最后环节做，，可重新备份刚刚编译好的文件
    .pipe(rename({// 给文件重新娶个名字，
        basename:'cp',//压缩后的文件名叫这个cp.min.js
        extname:'.min.js'
    }))
    //重新压缩
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))//还要在此基础上压缩
    //重新保存目录
    .pipe(gulp.dest('server/public/js'))//现在在该路径下有2个文件一个是编译好的压缩的，一个是编译好的未压缩的
    //我们要监听文件，当文件变化后，自动刷新
        //gulp-if进行判断再执行reload
    .pipe(gulpif(args.watch,livereload()))//判断命令行的watch参数，如命令行中有watch字样的选项，那么就执行热更新，没有就自动更新不刷新
})
/*如上的是所有js内容项目构建内容，除此之外还需要处理页面模版部分内容args.js脚本工具，见args.js文件*/