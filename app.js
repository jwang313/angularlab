// using mongoose to connect to DB 
require('./app_server/models/db.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var routes = require('./app_server/routes/index');

app.set('port', process.env.PORT);

app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'jade');

app.use(function(req, res, next) {
  console.log('middlewear ', ' method:' , req.method, ' url: ', req.url);
  next(); 
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

var server = app.listen(app.get('port'), function() {
       console.log('I am listening on port ' + server.address().port);
});



