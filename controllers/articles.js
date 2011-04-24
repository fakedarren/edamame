
module.exports = {

	routes: {
		'articles': {
			'url': '/cms/articles',
			'method': 'get'
		}
	},
	
	articles: function(req, res){
		res.partial('articles/articles');
	}
	
};