//node原始回调
getAsync('tesxt.txt', function(err, result) {
  if(err) {
    console.log('error');
    return
  }
  //执行diamante
})

//promise
var promise = getAsyncPromise('test.txt');
promise.then(function(result){
  //处理结果
}).catch(function(error){
  //处理error
})


//Constructor
var promise = new Promise(function(resolve, reject) {
    // 异步处理
    // 处理结束后、调用resolve 或 reject
});
