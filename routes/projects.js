
/*
 * GET data from redmine.
 */
var log = 'projects.js: ';

var dataLoader = require('./../modules/dataLoader');
// var settings = require('./../settings');

exports.data = function(req, res){

	var projectId = req.route.params['id'];
	console.log(log + 'projectId=' + projectId);


	dataLoader.loadAll(function(data) {
												res.send(data);
											});
  
};