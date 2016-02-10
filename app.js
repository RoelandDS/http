var express = require('express'),
  config = require('./config/config.js'),
  routes = require('./lib/routes.js');

var app = module.exports = express();

config(app);

app.set('name', app.config.name);
app.set('port', app.config.port);

// CSS & JS folder & banner folder
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

routes(app);

// Launch application.
app.listen(app.get('port'), function() {
  console.log('****', app.get('name'), 'started on port', app.get('port'));
});