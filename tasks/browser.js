import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';//gulp常用的工具，函数集合
import args from './util/args';

gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();
    //只要执行browser任务，那么它就会监听app目录下的js，如果js发生修改，自动启动tasks/scripts.js的构建脚本
    //tasks/scripts.js任务完成后会将es6转换成es5,并把它写入到server目录下的文件
    gulp.watch('app/**/*.js',['scripts']);//参数1，指定监听目录，参数2，要执行什么任务
    gulp.watch('app/**/*.ejs',['pages']);//模版文件也是相同用法
    gulp.watch('app/**/*.css',['css']);//同上
})
