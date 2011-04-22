var fs = require('fs');

module.exports = {

	routes: {
		'css': {
			'url': '/assets/CSS/*',
			'method': 'get'
		},
		'javascript': {
			'url': '/assets/JS/*',
			'method': 'get'
		}
	},
	
	css: function(req, res){
		fs.readFile(req.url.substring(1), function (err, data) {
			if (err) throw err;
			res.header('Content-Type', 'text/css');
			res.send(data);	
		});
	},
	
	javascript: function(){
		fs.readFile(req.url.substring(1), function (err, data) {
			if (err) throw err;
			res.header('Content-Type', 'text/javascript');
			res.send(data);	
		});
	}
	
};

