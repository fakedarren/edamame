module.exports = {

    routes: {
        'tests': {
            'url': '/cms/tests',
            'method': 'get'
        }
    },
    
    tests: function(req, res){
        res.redirect('/tests/jasmine/runner.html');
    }
    
};