var config = require('../config/configuration');
var mongoose = require("mongoose");
//mongoose.connect(config.database);
//mongoose.model('navItems', require('../models/site').navItems);

module.exports = {

	routes: {
		'site': {
			'url': '/cms/site',
			'method': 'get'
		}
	},
	
	site: function(req, res){
		var navitems = mongoose.model('navItems');
		navitems.find({}, function(err, docs){
			var items = [];
			docs.forEach(function(record){
				if (record.doc.name) items.push(record.doc);
			});
			res.partial('site/site', {
				locals: {
					pages: items
				}
			});
		});
	}
	
};