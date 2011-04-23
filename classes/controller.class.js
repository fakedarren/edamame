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
		
		Object.keys(controller).map(function(action){
			var fn = controller[action];
			if(typeof(fn) === "function"){
				if(a = routes[action]){
					switch(a.method){
						case 'get':
							app.get(a.url, fn);
							console.log("initialized get " + a.url);
							break;
						case 'post':
							app.post(a.url, fn);
							console.log("initialized post " + a.url);
							break;
						case 'put':
							app.put(a.url, fn);
							console.log("initialized put " + a.url);
							break;
						case 'delete':
							app.del(a.url, fn);
							console.log("initialized delete " + a.url);
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