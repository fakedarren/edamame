var fs = require("fs"),
    prime = require('prime');


var Plugins = prime({

    constructor: function(app){
        this.app = app;
        this.parsePlugins();
    },

    parsePlugins: function(){
        var self = this,
            node_modules = __dirname + '/../../node_modules';

        fs.readdir(node_modules, function(err, modules){
            if (err) throw err;
            modules.forEach(function(module){
                var module_dir = node_modules + '/' + module;

                fs.exists(module_dir + '/edamame.json', function(exists){
                    if (exists)
                        self.registerPlugin(module_dir);
                });
            });
        });
    },

    registerPlugin: function(plugin){
        console.log('\nregistering plugin ' + plugin);
    }

});


module.exports = Plugins;