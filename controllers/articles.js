
module.exports = {

	routes: {
		'articles': {
			'url': '/articles',
			'method': 'get'
		}
	},
	
	articles: function(req, res){
		res.partial('articles/articles');
	}
	
};