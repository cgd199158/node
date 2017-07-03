// ##Node.js Stream(流)
//
// Node.js，Stream 有四种流类型：
//   Readable - 可读操作。
//   Writable - 可写操作。
//   Duplex - 可读可写操作.
//   Transform - 操作被写入数据，然后读出结果。
// 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
//   data - 当有数据可读时触发。
//   end - 没有更多的数据可读时触发。
//   error - 在接收和写入过程中发生错误时触发。
//   finish - 所有数据已被写入到底层系统时触发。


var fs = require("fs");
var data = "";
//读文件
//创建可读数据流
var readStream = fs.createReadStream('./testData/input.txt');

//设置编码为UTF-8
readStream.setEncoding('UTF8');

//处理流事件 --> data, end, and error
readStream.on('data', function (chunk) {
  data += chunk
})

readStream.on('end',function(){
   console.log(data);
});

readStream.on('error', function(err){
   console.log(err.stack);
});

console.log('*********程序执行完毕**************')


//写入流
var writeStream = fs.createWriteStream('./testData/write.txt');

writeStream.write('这是一段被写入文件的话!!!!','UTF8');

//标记文本末尾
writeStream.end();

writeStream.on('finish', function () {
  console.log('写入完成!!!')
})

writeStream.on('error', function() {
  console.log(err.stack);
})

console.log('*********程序执行完毕**************');


//管道流
var readFile = fs.createReadStream('./testData/input.txt');

var writeFile = fs.createWriteStream('./testData/copy.txt');

readFile.pipe(writeFile);

console.log('*********程序执行完毕**************');


//链式流
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz

fs.createReadStream('./testData/input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./testData/input.txt.gz'));

console.log('*********文件压缩完成**************');

//文件解压
fs.createReadStream('./testData/input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('./testData/extract.txt'));

console.log('*********文件解压完成**************');
