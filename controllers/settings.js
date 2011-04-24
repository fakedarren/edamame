
module.exports = {

	routes: {
		'settings': {
			'url': '/cms/settings',
			'method': 'get'
		}
	},
	
	settings: function(req, res){
		res.partial('settings/settings');
	}
	
};