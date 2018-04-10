/**
 * Created by acer on 2018/4/7.
 */
/**
 * EventEmitter 对象如果在实例化时发生错误，会触发error事件。
 * 当添加新的监听器时，newListener 事件会触发;
 * 当监听器被移除时，removeListener事件被触发
 */
var EventEmitter = require('events').EventEmitter;
var event =new EventEmitter();
event.on('some_event',function () {
    console.log('some_event 事件触发');
});
setTimeout(function () {
    event.emit('some_event');
},1000);
 /**
  * EventEmitter的每个事件由一个事件或诺干个参数组成，事件名是一个字符串，通常表达一定的语义。
  * 对于每个事件，EventEmitter支持若干个事件监听器
  * 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
  */
 var events = require('events');
 var emitter = new events.EventEmitter();
 emitter.on('someEvent',function (arg1, arg2) {
     console.log('listener1',arg1,arg2);
 });
 emitter.on('someEvent',function (arg1, arg2) {
     console.log('listener2',arg1,arg2)
 });
 emitter.emit('someEvent','arg1参数','arg2参数');

 //EventEmitter类的应用
var events = require('events');
var eventEmitter = new events.EventEmitter();
// 监听器 #1
var listener1 = function listener1() {
    console.log('监听器 listener1 执行');
};
//监听器 #2
var listener2 = function listener2() {
    console.log('监听器 listener2 执行');
};
//绑定connection 事件，处理函数为listener1
eventEmitter.addListener('connection',listener1);
//绑定connection 事件，处理函数为listener2
eventEmitter.on('connection',listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"个监听器监听连接事件");
//处理connection事件
eventEmitter.emi