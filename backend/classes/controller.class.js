/*
Credit: https://github.com/MaxGfeller/mongee/
*/


var fs = require("fs"),
    prime = require('prime');


var Controller = prime({

    constructor: function(app){
        this.app = app;
        this.parseControllers();
    },
    
    parseControllers: function(){
        var self = this,
            root = __dirname + '/../controllers',
            folders = [root + '/backend', root + '/frontend'];

        folders.forEach(function(controllers, i){
            fs.readdir(controllers, function(err, files){
                if (err) throw err;
                files.forEach(function(file){
                    console.log("loading controller " + file);
                    self.loadController(file, folders[i]);
                });
            });
        });
    },
    
    loadController: function(file, folder){
        var app = this.app,
            controller = require(folder + "/" + file),
            routes = controller["routes"];
        
        Object.keys(controller).map(function(action){
            var fn = controller[action];

            if (typeof fn === "function"){
                switch (routes[action].method){
                    case 'get':
                        app.get(routes[action].url, fn);
                        console.log("initialized get " + routes[action].url);
                        break;
                    case 'post':
                        app.post(routes[action].url, fn);
                        console.log("initialized post " + routes[action].url);
                        break;
                    case 'put':
                        app.put(routes[action].url, fn);
                        console.log("initialized put " + routes[action].url);
                        break;
                    case 'delete':
                        app.del(routes[action].url, fn);
                        console.log("initialized delete " + routes[action].url);
                        break;
                }
            }
        });
    }

});


module.exports = {
    initialize: function(app){
        new Controller(app);
    }
}