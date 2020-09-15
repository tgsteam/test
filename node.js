var express = require('express')
var fs = require('fs')
var path = require('path')
var http = require('http')
var https = require('https')
var ejs = require('ejs')
var app = express();
app.use(express.static(path.join(__dirname, '../SQG')));
app.set('views', path.join(__dirname, '../SQG'));
app.set('view engine', 'ejs');

var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index',
        {
            image: 'https://lablog-images.oss-cn-beijing.aliyuncs.com/images/lablog.gif',
        });
});
router.get('/ping', function (req, res, next) {
    res.end('pong');
});
app.use('/', router);
var httpServer = http.createServer(app);
httpServer.listen(80);
var events = require('events');
var eventEmitter = new events.EventEmitter();