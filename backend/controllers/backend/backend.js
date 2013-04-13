var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
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
                models = item.models;

            models.forEach(function(model){
                mongoose.model(model.name, model.schema);

                var ModelObject = db.model(model.name),
                    m = new ModelObject();
                
                m.collection.drop();

                state.push('Added ' + model.name + ' collection');
                
                if (item[model.name + 'Records']){
                    _(item[model.name + 'Records']).each(function(record){
                        var m = new ModelObject();
                        for (var i in record){
                            m[i] = record[i];
                        }
                        m.save();
                    });
                    state.push('Added ' + item[model.name + 'Records'].length + ' records to ' + model.name + ' collection');
                }
            });

            if (item.installer){
                item.installer.call(item);
                state.push('Ran the installer method');
            }

        });

        state.push('Install script complete!');
        res.send(state.join('<br />'));
    }
    
};