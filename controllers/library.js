
module.exports = {

	routes: {
		'library': {
			'url': '/cms/library',
			'method': 'get'
		}
	},
	
	library: function(req, res){
		res.partial('library/library');
	}
	
};