var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {

	routes: {
		'view': {
			'url': '/Users',
			'method': 'get'
		}
	},
	
	view: function(req, res){
		User.find({}, function(error, users){
			res.send(users);
		});
	}
	
};