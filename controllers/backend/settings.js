module.exports = {

    routes: {
        'settings': {
            'url': '/cms/settings',
            'method': 'get'
        }
    },
    
    settings: function(req, res){
        res.render('backend/settings/settings');
    }
    
};