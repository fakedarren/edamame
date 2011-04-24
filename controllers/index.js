/*
Credit: https://github.com/jettro/nodejstryout
*/

module.exports = {

	routes: {
		'index': {
			'url': '/cms',
			'method': 'get'
		},
		'logIn': {
			'url': '/cms/login',
			'method': 'get'
		},
		'authenticated': {
			'url': '/cms/authenticated',
			'method': 'get'
		}
	},
	
	index: function(req, res){
		if (req.session.user){
			res.render('index/index', {
				locals: {
					username: req.session.user.name
				}
			});
		} else {
			res.redirect('/cms/logIn');
		}
	},
	
	logIn: function(req, res){
		var sys = require('sys');
		var OAuth = require('oauth').OAuth;
		var config = require('../config/configuration');

		oa = new OAuth(
			"https://api.twitter.com/oauth/request_token",
			"https://api.twitter.com/oauth/access_token",
			config.twitter.consumerKey,
			config.twitter.consumerSecret,
			"1.0A",
			config.host + '/cms/authenticated',
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
	}
	
};