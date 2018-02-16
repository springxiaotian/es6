import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';//处理任务间的关联关系，和先后顺序
//清目录，css,编译模板，执行脚本，serve一定放在最后执行，顺序很重要
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));