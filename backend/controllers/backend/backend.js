var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


module.exports = {

    routes: {
        'cms': {
            'url': '/cms',
            'method': 'get'
        },
        'logIn': {
            'url': '/cms/login',
            'method': 'get'
        },
        'install': {
            'url': '/cms/install',
            'method': 'get'
        }
    },
    
    cms: function(req, res){
        if (req.session.user){
            res.render('backend/backend', {
                username: req.session.user.name
            });
        } else {
            res.redirect('/cms/logIn');
        }
    },
    
    logIn: function(req, res){
        res.render('backend/account/login');
    },
  
    install: function(req, res){
        var install = require('../install/install');
        install.forEach(function(module){
            
            var item = require('../install/' + module);
            
            var Model = new Schema(item.schema);
            mongoose.model(item.name, Model);

            var ModelObject = db.model(item.name);
            var m = new ModelObject();
            m.collection.drop();

            item.records.each(function(record){
                var m = new ModelObject();
                Object.each(record, function(value, key){
                    m[key] = value;
                });
                m.save();
            });
        });
        res.send('Install script complete');    
    }
    
};