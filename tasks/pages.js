import gulp from 'gulp';//引入gulp包，
import gulpif from 'gulp-if';//引入gulp-if判断语句包
import livereload from 'gulp-livereload';//引入热更新包
import args from './util/args';//引入命令行参数包
/*这是一个处理模版的文件pages.js*/


//创建一个名为pages任务
gulp.task('pages',()=>{
    //gulp所有的任务创建都是要打开一个文件，用gulp.src命令
    return gulp.src('app/**/*.ejs')//app目录下所有ejs格式文件，不区分嵌套文件夹，各个嵌套目录的都可以件
    .pipe(gulp.dest('server'))//将文件原封不动的copy到一个地方(copy到server目录)
    .pipe(gulpif(args.watch,livereload()))//监听是不是热更新
})


//接下来创建一个处理css相关任务，先去终端创建文件
//先去命令行创建一个文件

