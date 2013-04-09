var mongoose = require("mongoose"),
    pageSchema = require('../../models/page').schema,
    _ = require("lodash"),
    api;


mongoose.model('pages', pageSchema);


api = {

    routes: {    
        createPage: {
            url: '/cms/pages',
            method: 'post'
        },
        readPage: {
            url: '/cms/pages/:id',
            method: 'get'
        },
        readAllPages: {
            url: '/cms/pages',
            method: 'get'
        },
        updatePage: {
            url: '/cms/pages',
            method: 'put'
        },
        deletePage: {
            url: '/cms/pages/:id',
            method: 'delete'
        }
    },

    createPage: function(req, res){
        res.statusCode = 200;
        res.send("OK\n");
    },
    
    readPage: function(req, res){
        res.json({
            id: req.params.id,
            title: 'My Page'
        });
    },
    
    readAllPages: function(req, res){
        var pages = mongoose.model('pages');
        pages.find({}, function(err, docs){
            res.json(docs);
        });
    },

    updatePage: function(req, res){
        res.statusCode = 200;
        res.send("OK\n");
    },
    
    deletePage: function(req, res){
        res.statusCode = 200;
        res.send("OK\n");
    }

};


module.exports = _.merge(api, {

    routes: {
        pages: {
            url: '/cms/content/pages',
            method: 'get'
        },
        newPage: {
            url: '/cms/content/new-page',
            method: 'get'   
        },
        modules: {
            url: '/cms/content/modules',
            method: 'get'
        }
    },
    
    pages: function(req, res){
        res.render('backend/content/pages');
    },

    newPage: function(req, res){
        res.render('backend/content/new-page');
    },
    
    modules: function(req, res){
        res.render('backend/content/modules');
    }
    
});