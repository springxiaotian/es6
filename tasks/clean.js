import gulp from 'gulp';
import del from 'del';
import args from './util/args';

//创建清空指定目录的任务
gulp.task('clean',()=>{
    //清public和views下的文件
    return del(['server/public','server/views'])//清空2个文件夹下的内容
})

//