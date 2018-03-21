import 'babel-polyfill';//兼容性
import Lottery from './lottery';//引入lottery.js模块
import Mock from 'mockjs';
const syy=new Lottery();
console.log(syy);
//import './class/lesson17';
//import {A,test,Hello} from './class/lesson17';
//console.log(A,test,Hello);
/*
 123
 ƒ test() {
 console.log('test');
 }
 ƒ Hello() {
 _classCallCheck(this, Hello);
 }
/!*import {A} from './class/lesson17';
console.log(A);//123*!/
//import * as lesson  from './class/lesson17';//as表示取别名，*表示所有的东西
//比如 lesson17中的内容export 了3项，那么*代表的就是3项内容
//as 别名lesson，就说明那些方法都存放在lesson下面
//不管有多少个需要导出的，用*都可以导出了
//console.log(lesson.A,lesson.test);//使用的时候就用lesson.A,lesson.test就可以拿到了
//返回 123，ƒ test() {console.log('test');}
//第二种导出方法
//import Lesson17 from './class/lesson17';
//console.log(Lesson17.A);//123*/


/*
*
* 正式开始一个项目
*
* */




