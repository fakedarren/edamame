var config = require('../config/configuration');
var mongoose = require("mongoose");
//mongoose.connect(config.database);
//mongoose.model('articles', require('../models/article').articles);

module.exports = {

	routes: {
		'articles': {
			'url': '/cms/articles',
			'method': 'get'
		},
		'create': {
			'url': '/cms/articles/create',
			'method': 'get'
		},
		'saveNew': {
			'url': '/cms/articles/create',
			'method': 'post'
		},
		'update': {
			'url': '/cms/articles/update/:id',
			'method': 'get'
		},
		'saveUpdate': {
			'url': '/cms/articles/update/:id',
			'method': 'post'
		}
	},
	
	articles: function(req, res){
		res.render('articles/articles', {
			live: [],
			draft: []
		});
	},
	
	create: function(req, res){
		res.render('articles/create');
	},
	
	saveNew: function(req, res){
		res.render('articles/articles', {
			live: live,
			draft: draft,
			created: true
		});
	},
	
	update: function(req, res){
		res.render('articles/update', {
			article: []
		});
	},
	
	saveUpdate: function(req, res){
		var articles = mongoose.model('articles');
		var match = {
			_id: req.params.id
		};
		articles.findById(req.params.id, function (err, article){
			article.body = req.body.body;
			article.title = req.body.title;
			article.state = req.body.state;
			article.save();
			articles.find(match, function(err, docs){
				res.partial('articles/update', {
					locals: {
						article: docs[0].doc
					}
				});
			});
		});
	}
	
};