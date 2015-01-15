var express = require('express');
var http = require('http');

global.config = require('konfig')();

var app = express();
app.set('view engine', 'ejs'); // to load .ejs files
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(global.config.env.port);
console.log('Server on port ' + global.config.env.port);