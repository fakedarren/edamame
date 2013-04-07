module.exports = {

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
    
};