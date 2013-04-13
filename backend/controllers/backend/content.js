var mongoose = require("mongoose"),
    sectionSchema = require('../../models/section').schema,
    pageSchema = require('../../models/page').schema,
    async = require('async'),
    _ = require("lodash"),
    api;


mongoose.model('sections', sectionSchema);
mongoose.model('pages', pageSchema);


api = {

    routes: {
        readAllSections: {
            url: '/cms/sections',
            method: 'get'
        },
        readSection: {
            url: '/cms/sections/:id',
            method: 'get'
        },
        createPage: {
            url: '/cms/pages',
            method: 'post'
        },
        readPage: {
            url: '/cms/pages/:id',
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

    readAllSections: function(req, res){
        var sections = mongoose.model('sections'),
            pages = mongoose.model('pages'),
            content = [];

        async.series({
            sections: function(callback){
                sections.find({}, function (err, docs) {
                    callback(null, docs);
                });
            },
            pages: function(callback){
                pages.find({}, function (err, docs) {
                    callback(null, docs);
                });
            },                    
        }, function(err, docs){
            docs.sections.forEach(function(section, i){
                var sectionPages = docs.pages.filter(function(page){
                    return page.sectionID == section._id;
                });
                content.push({
                    _id: section._id,
                    title: section.title,
                    pages: sectionPages
                });
            });
            res.json(content);
        });
    },

    readSection: function(req, res){
        var pages = mongoose.model('pages'),
            query;

        query = {
            sectionID: req.params.id
        };

        pages.find(query, function(err, docs){
            res.json(docs);
        });
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