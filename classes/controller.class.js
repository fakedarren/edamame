var fs = require("fs");
require('mootools');

/*
https://github.com/MaxGfeller/mongee/
*/

var Controller = new Class({

	initialize: function(app){
		this.app = app;
		this.parseControllers();
	},
	
	parseControllers: function(){
		var self = this;
		fs.readdir(__dirname + '/../controllers', function(err, files){
			if (err) throw err;
			files.forEach(function(file){
				console.log("loading controller " + file);
				self.loadController(file);
			});
		});
	},
	
	loadController: function(file){
		
		var app = this.app;
		var controller = require('../controllers/' + file);
		var routes = controller["routes"];
		var thisAction;
		
		Object.keys(controller).map(function(action){
			var fn = controller[action];
			if(typeof(fn) === "function"){
				if(thisAction = routes[action]){
					switch(thisAction.method){
						case 'get':
							app.get(thisAction.url, fn);
							console.log("initialized get " + thisAction.url);
							break;
						case 'post':
							app.post(thisAction.url, fn);
							console.log("initialized post " + thisAction.url);
							break;
						case 'put':
							app.put(thisActiona.url, fn);
							console.log("initialized put " + thisAction.url);
							break;
						case 'delete':
							app.del(thisAction.url, fn);
							console.log("initialized delete " + thisAction.url);
							break;
					}
				} else {
					console.log("WARNING: no mapping for " + action + " defined");
				}
			}
		});
	}

});

module.exports = {
	initialize: function(app) {
		new Controller(app);
	}
}