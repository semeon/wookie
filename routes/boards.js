
/*
 * GET data from redmine.
 */
var log = 'boards.js: ';


exports.settings = function(req, res){

	var settingsId = req.route.params['id'];
	console.log(log + 'settingsId=' + settingsId);

	var settings = require('./../boards/' + settingsId);

	settings.data(function(data) {
									res.send(data);
								});
  
};