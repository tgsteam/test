var express = require('express')
var fs = require('fs')
var path = require('path')
var http = require('http')
var https = require('https')
var ejs = require('ejs')
var app = express();

app.use(express.static(path.join(__dirname, './')));
app.set('views', path.join(__dirname, './'));
app.set('view engine', 'ejs');

var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index',
    {
      null:null
    });
});

router.get('/ping', function (req, res, next) {
  res.end('pong');
});

// app.use('/', router);
// var key = fs.readFileSync(path.join(__dirname, '/../certs/server.key'));
// var cert = fs.readFileSync(path.join(__dirname + '/../certs/server.pem'));

// var options = {
//   key: key,
//   cert: cert
// }
var httpsServer = https.createServer(options, app);
var httpServer = http.createServer(app);
// app.get('/', function (req, res, next) {
//   res.send('Hello Express+https');
// });
//https监听443端口
// httpsServer.listen(443);
//http监听80端口
httpServer.listen(80);
var events = require('events');
var eventEmitter = new events.EventEmitter();
