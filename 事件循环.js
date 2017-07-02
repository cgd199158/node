// ## 事件循环
// 1.nodejs基本所有的事件机制基本都是用的观察者模式.
// 2.nodejs是单线程进程,但通过回调和事件支持并发,所以性能很高.
// 3.nodejs基本上所有的API都是异步的,并作为一个独立的线程进行,使用异步函数调用,并处理并发.
// 4.Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

var events = require('events');

//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建事件处理函数
var connectHandler = function() {
  console.log('连接成功!!!');

  //触发data_received事件
  eventEmitter.emit('data_received');
}

//绑定connection事件处理函数
eventEmitter.on('connection', connectHandler);

//使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function () {
  console.log('数据接收成功')
})

eventEmitter.emit('connection');

console.log('************程序执行完毕***************')




var fs = require('fs');
fs.readFile('./testData/input.txt', function(err, data){
  if(!err){
    console.log(data.toString());
    return
  }
  console.log(err.stack)
})
console.log('************程序执行完毕***************')
