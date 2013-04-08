var config = require('../../config/configuration'),
    OAuth = require('oauth').OAuth,
    oa;
    

module.exports = {

    routes: {
        'logIn': {
            'url': '/cms/account/login-with-twitter',
            'method': 'get'
        },
        'authenticated': {
            'url': '/cms/account/authenticated',
            'method': 'get'
        },
        'logOut': {
            'url': '/cms/account/logout',
            'method': 'get'
        },
        'myAccount': {
            'url': '/cms/account/my-account',
            'method': 'get'
        }
    },
    
    logIn: function(req, res){
        oa = new OAuth(
            "https://api.twitter.com/oauth/request_token",
            "https://api.twitter.com/oauth/access_token",
            config.twitter.consumerKey,
            config.twitter.consumerSecret,
            "1.0A",
            config.host + '/cms/account/authenticated',
            "HMAC-SHA1"
        );
        req.session.oauth = oa;

        oa.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results){
            if (error){
                new Error(error.data);
            } else {
                req.session.oauth.token = oauth_token;
                req.session.oauth.token_secret = oauth_token_secret;
                res.redirect('https://api.twitter.com/oauth/authenticate?oauth_token=' + oauth_token);
            }
        }); 
    },
    
    authenticated: function(req, res){
        if (req.session.oauth){
            req.session.oauth.verifier = req.query.oauth_verifier;
            var oauth = req.session.oauth;
            var callback = function(error, oauth_access_token, oauth_access_token_secret, results){
                if (error) new Error(error);
                req.session.user = {
                    name: results.screen_name
                };
                res.redirect("/cms/");
            };
            oa.getOAuthAccessToken(oauth.token, oauth.token_secret, oauth.verifier, callback);
        }
    },

    logOut: function(req, res){
        req.session.user = null;
        res.redirect("/cms/");
    },

    myAccount: function(req, res){
        res.render('backend/account/my-account');
    }
    
};