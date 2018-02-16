/*先引入一个包，这个包是处理命令行脚本，
 处理命令行参数，在命令行中的命令需要处理和识别
 所以我们需要引入一个包进行处理
 */
import yargs from 'yargs';

/*区分开发环境和线上环境*/
const args=yargs
    .option('production',{/*用来提取参数，区分命令行输入是否有这个参数，进而区分是线上还是开发环境*/
        boolean:true,//选项是布尔类型，
        default:false,//如果没有输入production参数的话，默认是false开发环境
        describe:'min all scripts'
    })
/*要不要监听开发环境中修改的文件，是否要自动编译，用命令行控制*/
    .option('watch',{//watch,参数控制
        boolean:true,//选项是布尔类型，
        default:false,
        describe:'watch all files'
    })
/*要不要详细输出，命令行执行的日志*/
    .option('verbose',{//verbose,参数控制
        boolean:true,//
        default:false,//
        describe:'log'
    })
    //关于映射，压缩后sourcemap处理参数
    .option('sourcemaps',{//sourcemap,参数控制
        describe:'force the creation of sourcemaps'
    })
    //端口
    .option('port',{
        string:true,
        default:8080,//端口号
        describe:'server port'
    })
    .argv//表示命令行内容，以字符串作为解析
    export default args;

