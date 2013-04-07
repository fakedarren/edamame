module.exports = {

    routes: {
        'pages': {
            'url': '/cms/content/pages',
            'method': 'get'
        },
        'modules': {
            'url': '/cms/content/modules',
            'method': 'get'
        }
    },
    
    pages: function(req, res){
        res.render('backend/content/pages');
    },
    
    modules: function(req, res){
        res.render('backend/content/modules');
    }
    
};