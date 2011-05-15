var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/cms');
mongoose.model('articles', require('../models/article').articles);

module.exports = {

	routes: {
		'articles': {
			'url': '/cms/articles',
			'method': 'get'
		}
	},
	
	articles: function(req, res){
		var articles = mongoose.model('articles');
		articles.find({}, function(err, docs){
			var live = [];
			var draft = []
			docs.forEach(function(record){
				if (record.doc.state == 0){
					draft.push(record.doc);
				} else {
					live.push(record.doc);
				}
			});
			res.partial('articles/articles', {
				locals: {
					live: live,
					draft: draft
				}
			});
		});
	}
	
};