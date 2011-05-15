var config = require('../config/configuration');
var mongoose = require("mongoose");
mongoose.connect(config.database);
mongoose.model('assets', require('../models/asset').assets);

module.exports = {

	routes: {
		'library': {
			'url': '/cms/library',
			'method': 'get'
		}
	},
	
	library: function(req, res){
		var assets = mongoose.model('assets');
		assets.find({}, function(err, docs){
			var images = [];
			docs.forEach(function(record){
				if (record.doc.type == 'image'){
					images.push(record.doc);
				}
			});
			res.partial('library/library', {
				locals: {
					images: images
				}
			});
		});
	}
	
};