var jade = require('jade');
		
module.exports = {

	routes: {
		'index': {
			'url': '/',
			'method': 'get'
		}
	},
	
	index: function(req, res){
		jade.renderFile('./views/index/index.jade', {} ,function(err, html){
			if (err) console.log(err);
			res.send(html);
		});

	}
	
};