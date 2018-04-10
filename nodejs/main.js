/**
 * Created by acer on 2018/4/7.
 */
//阻塞代码实例
var fs = require('fs');
var data = fs.readFileSync('index.txt');
console.log(data.toString());
console.log("程序执行结束！");
// 非阻塞代码实例
var fs = require('fs');
fs.readFile('index.txt',function (err, data) {
    if (err) return console.log(err);
    console.log(data.toString());
});
console.log('程序执行结束啦');


//Node.js时间循环  Node.js是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高；
//引入events模块
var events = require('events');
//创建eventEmitter 对象
var eventEmitter = new events.EventEmitter();
//创建事件处理程序
var connectHandler = function connected(){
    console.log('链接成功');
    //触发data_received事件
    eventEmitter.emit('data_received');
};
//绑定connection事件处理程序
eventEmitter.on('connection',connectHandler);
//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function () {
    console.log('数据接收成功。');
});
//触发connection事件
eventEmitter.emit('connection');
console.log('程序执行完毕');
