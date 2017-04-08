// Node app 

require('./app_api/models/db.js');  // using mongoose to connect to DB 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./app_server/routes/index');

var routesApi = require('./app_api/routes/index');

app.set('port', process.env.PORT);

app.use(bodyParser.urlencoded({ extended: 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 
app.use('/', routes);
app.use('/api', routesApi); 

app.use(express.static(path.join(__dirname, 'app_client')));
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'jade');

app.get('/angular', function (req, res) {
       res.sendFile(__dirname + '/app_client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
 });

var server = app.listen(app.get('port'), function() {
       console.log('I am listening on port ' + server.address().port);
});



