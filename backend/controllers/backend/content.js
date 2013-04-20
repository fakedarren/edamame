var mongoose = require("mongoose"),
    sectionSchema = require('../../models/section').schema,
    pageSchema = require('../../models/page').schema,
    gridSchema = require('../../models/grid').schema,
    async = require('async'),
    _ = require("lodash"),
    api;


mongoose.model('sections', sectionSchema);
mongoose.model('pages', pageSchema);
mongoose.model('grids', gridSchema);


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
        },
        readAllGrids: {
            url: '/cms/grids',
            method: 'get'
        },
        readGrid: {
            url: '/cms/grids/:id',
            method: 'get'
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
    },

    readAllGrids: function(req, res){
        var grids = mongoose.model('grids');

        grids.find({}, function(err, docs){
            res.json(docs);
        });
    },

    readGrid: function(req, res){
        var grids = mongoose.model('grids'),
            query;

        query = {
            sectionID: req.params.id
        };

        grids.find(query, function(err, docs){
            res.json(docs);
        });
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
        grids: {
            url: '/cms/content/grids',
            method: 'get'
        },
        newGrid: {
            url: '/cms/content/new-grid',
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

    grids: function(req, res){
        res.render('backend/content/grids');
    },

    newGrid: function(req, res){
        res.render('backend/content/new-grid');
    },
    
    modules: function(req, res){
        res.render('backend/content/modules');
    }
    
});