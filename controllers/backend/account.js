module.exports = {

    routes: {
        'myAccount': {
            'url': '/cms/account/my-account',
            'method': 'get'
        }
    },
    
    myAccount: function(req, res){
        res.render('backend/account/my-account');
    }
    
};