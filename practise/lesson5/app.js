var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var async = require('async');
var url = require('url');

var app = new express();

var cnodeUrl = 'https://cnodejs.org/';
var concurrencyCount = 0; //并发连接数的计数器
var contentList = [];

var fetchUrl = function (url, callback) {
  superagent.get(url)
    .end(function (listErr, listRes) {
      if(listErr){
        return console.log(err);
      }
      var $ = cheerio.load(listRes.text);
      callback(null, url )
      contentList.push({
        title: $('.topic_full_title').text().trim(),
        href: url,
        comment1: $('.reply_content').eq(0).text().trim(),
      })
      // console.log('result', result)
    })
}


var getData = function (res) {
  superagent.get(cnodeUrl)
    .end(function (err, sres) {
      if(err){
        return console.log(err)
      }
      var urlLists = [];
      var $ = cheerio.load(sres.text);
      $('#topic_list .topic_title').map((index, item) => {
        var $item = $(item);
        var href = url.resolve(cnodeUrl, $item.attr('href'));
        urlLists.push(href)
      })
      async.mapLimit(urlLists, 5, function (url, callback) {
        fetchUrl(url, callback)
      }, function (err, result){
        console.log('final:')
        console.log(result)
        res.send(contentList)
      })
    });
}

app.get('/',function(req, res){
  getData(res);
});

app.listen(3000, function () {
  console.log('listening at port 3000')
})
