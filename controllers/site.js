
module.exports = {

	routes: {
		'navigation': {
			'url': '/navigation',
			'method': 'get'
		}
	},
	
	navigation: function(req, res){
		res.partial('site/navigation');
	}
	
};