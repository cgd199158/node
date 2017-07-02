// ##EventEmitter
// 1.nodejs有所的异步事件I/O操作在完成的时候都会发送一个事件到事件队列.
// 2.nodejs里面的许多对象都会分发事件: 一个net.Server对象会在每次有新连接时分发一个事件,  一个fs.readStream对象会在文件被打开的时候发出一个事件。
//  所有这些产生事件的对象都是 events.EventEmitter 的实例。
// 3.events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。

// error 事件
// EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。
// 当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
// 我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。例如：
// emitter.emit('error'); 

var events = require('events');

var eventEmitter = new events.EventEmitter();
eventEmitter.on('some_event', function() {
  console.log('some_event被触发了!!!')
})


setTimeout(function() {
  eventEmitter.emit('some_event');
},2000)

console.log('******** 程序执行完毕*********')

/**
 * addListener(event, listener)
 * 为指定事件添加一个监听器到监听器数组的尾部。
 */

 /**
  * on(event, listener)
  * 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
  */

server.on('connection', function (stream) {
  console.log('someone connected!');
});

/**
 * once(event, listener)
 * 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
 */

 /**
  * removeListener(event, listener)移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
  * 它接受两个参数，第一个是事件名称，第二个是回调函数名称。
  */

var callback = function(stream) {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);

/**
 * removeAllListeners([event])
 * 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
 */

/**
 * setMaxListeners(n)
 * 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
 */

/**
 * listeners(event)
 * 返回指定事件的监听器数组。
 */

/**
 * emit(event, [arg1], [arg2], [...])
 *按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
 */
