var jade = require('jade');
		
module.exports = {

	routes: {
		'index': {
			'url': '/',
			'method': 'get'
		}
	},
	
	index: function(req, res){
		res.render('index/index', {});
	}
	
};