module.exports = {

    routes: {
        'plugins': {
            'url': '/cms/settings/plugins',
            'method': 'get'
        }
    },
    
    plugins: function(req, res){
        res.render('backend/settings/plugins', {
            plugins: global.plugins
        });
    }
    
};