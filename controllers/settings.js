
module.exports = {

	routes: {
		'settings': {
			'url': '/settings',
			'method': 'get'
		}
	},
	
	settings: function(req, res){
		res.partial('settings/settings');
	}
	
};