
module.exports = {

	routes: {
		'library': {
			'url': '/library',
			'method': 'get'
		}
	},
	
	library: function(req, res){
		res.partial('library/library');
	}
	
};