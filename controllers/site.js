
module.exports = {

	routes: {
		'site': {
			'url': '/site',
			'method': 'get'
		}
	},
	
	site: function(req, res){
		res.partial('site/site');
	}
	
};