const fs = require('fs');

// fs.stat('test.js', function (err, stats) {
//   if(err) throw err;
//   console.log(`stats: ${JSON.stringify(stats)}`);
// })

//转换为promise

const fs1 = function(fileUrl){
  return new Promise(function (resolve, reject) {
    fs.stat(fileUrl, function (err, stats) {
      if(err) return reject(err);
      resolve(stats);
    })
  })
}

fs1('/tmp/test.js').then(function (stats) {
  console.log(`stats: ${JSON.stringify(stats)}`);
}).catch(function (err) {
  console.log('err:', err)
})


//promise.all([...])
//全部执行完成后调用then,并发执行

//promise.race([...])
//其中之一执行完成调用then,并发执行
