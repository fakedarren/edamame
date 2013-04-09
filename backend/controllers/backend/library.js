var mongoose = require("mongoose"),
    assetSchema = require('../../models/asset').schema,
    _ = require("lodash"),
    api;


mongoose.model('assets', assetSchema);


api = {

    routes: {    
        createAsset: {
            url: '/cms/assets',
            method: 'post'
        },
        readAsset: {
            url: '/cms/assets/:type/:id',
            method: 'get'
        },
        readAllAssets: {
            url: '/cms/assets/:type',
            method: 'get'
        },
        updateAsset: {
            url: '/cms/assets',
            method: 'put'
        },
        deleteAsset: {
            url: '/cms/assets/:id',
            method: 'delete'
        }
    },

    createAsset: function(req, res){
        res.statusCode = 200;
        res.send("OK\n");
    },
    
    readAsset: function(req, res){
        res.json({
            id: req.params.id,
            src: 'http://www.placecage.com/c/64/64'
        });
    },
    
    readAllAssets: function(req, res){
        var assets = mongoose.model('assets');
        assets.find({type: req.params.type}, function(err, docs){
            var assets = [];
            docs.forEach(function(record){
                assets.push(record.doc);
            });
            res.json(assets);
        });
    },

    updateAsset: function(req, res){
        res.statusCode = 200;
        res.send("OK\n");
    },
    
    deleteAsset: function(req, res){
        res.statusCode = 200;
        res.send("OK\n");
    }

};


module.exports = _.merge(api, {

    routes: {
        'images': {
            'url': '/cms/library/images',
            'method': 'get'
        },
        'files': {
            'url': '/cms/library/files',
            'method': 'get'
        },
        'videos': {
            'url': '/cms/library/videos',
            'method': 'get'
        }
    },
    
    images: function(req, res){
        res.render('backend/library/images');
    },
    
    files: function(req, res){
        res.render('backend/library/files');
    },
    
    videos: function(req, res){
        res.render('backend/library/videos');
    }
    
});