// require像python的import，這邊把express模塊import進來

const express = require('express')
const app = express()

// morgan的作用是，儲存會自動restart server
// const morgan = require('morgan')

// app.use(morgan('short'))

// express使用callback function的參數req, res分別來接傳過來的，資料和要吐回去的資料
app.get('/', function(req, res){
    res.send('Test')
})



// 用express模塊開啟一個http request listener
var server = app.listen(8081, function(){})





// var express = require('express');
// var app = express();
 
// app.use(express.static('public'));
 
// app.get('/index.htm', function (req, res) {
//    res.sendFile( __dirname + "/" + "index.htm" );
// })
 
// app.get('/process_get', function (req, res) {
 
//    // 输出 JSON 格式
//    var response = {
//        "first_name":req.query.first_name,
//        "last_name":req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })
 
// var server = app.listen(8081, function () {
 
//   var host = server.address().address
//   var port = server.address().port
 
//   console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
// })