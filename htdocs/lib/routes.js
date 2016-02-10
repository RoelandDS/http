'use strict'
var seneca = require('seneca')();
var	configSeneca = require('../config/configSeneca.js');

configSeneca(seneca);

module.exports = function(app){
	/*app.get('/test', function(req, res){
		seneca.act({ role: 'clients', cmd: 'getClients'}, function(err, result){
			if (err) console.log(err);
			/*console.log(result);
			res.status(200).render(__dirname + '/templates/index.jade', {
				message: /*result.message
			});
		});



	});*/
	app.get('/', function(req, res){
		console.log("router line 21 starting getWeather");
		seneca.act({ role: 'weather', cmd: 'getWeather',city:'Brussels' }, function(err, result){
			if (err) console.log('ERROR: ', err);
			else {
				console.log(result.html);
				res.status(200).render(__dirname + '/templates/index.jade', {
					weather: result.html
				});
			}
		});



	});
}
