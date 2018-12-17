// require像python的import，這邊把express模塊import進來

const express = require('express')
const app = express()

// morgan的作用是，儲存會自動restart server
const morgan = require('morgan')

app.use(morgan('short'))

// express使用callback function的參數req, res分別來接傳過來的，資料和要吐回去的資料
app.get('/', function(req, res){
    res.send('Test')
})



// 用express模塊開啟一個http request listener
var server = app.listen(8081, function(){})