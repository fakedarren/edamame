var config = require('../../config/configuration'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    db = mongoose.connect(config.database),
    _ = require('lodash');


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
        var path = '../../install/',
            install = require(path + 'install'),
            state = [];
        
        install.forEach(function(module){
            var item = require(path + module),
                name = item.model.name,
                schema = item.model.schema;

            mongoose.model(name, schema);
            
            var ModelObject = db.model(name),
                m = new ModelObject();
            
            m.collection.drop();

            _(item.records).each(function(record){
                var m = new ModelObject();
                for (var i in record){
                    m[i] = record[i];
                }
                m.save();
            });

            state.push('Added ' + name + ' collection and ' + item.records.length + ' records');
        });

        state.push('Install script complete!');
        res.send(state.join('<br />'));
    }
    
};