'use strict';
var morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
	config = require('./config.json');

module.exports = function(app) {
  app.config = config;
  app.set('views engine', 'jade');
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended: false}));
};