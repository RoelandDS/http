'use strict'
var seneca = require('seneca')();
var	configSeneca = require('../config/configSeneca.js');

configSeneca(seneca);

module.exports = function(app){
	app.get('/', function(req, res){
		seneca.act({ role: 'clients', cmd: 'getClients'}, function(err, result){
			if (err) console.log(err);
			console.log(result);
			res.status(200).render(__dirname + '/templates/index.jade', {
				message: result.message
			});
		});

		
	});
}