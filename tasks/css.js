import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{
    return gulp.src(['app/**/*.css'])//打开app目录下的所有css文件
    .pipe(gulp.dest('server/public'))//目录的都可以件
    .pipe(gulpif(args.watch,livereload()))
})

/**/