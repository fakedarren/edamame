var express = require('express');
var jade = require('jade');

require('mootools');

var app = express.createServer();

app.configure(function(){
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    app.set('view options', { layout: 'shared/layout' });
	app.use(express.methodOverride());
	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({ secret: "MooToolsFTW" }));
});

var controller = require('./classes/controller.class');
controller.initialize(app);

app.get('/debug', function(req, res){
	res.send(process.env['DUOSTACK_DB_MONGODB']);
});

app.get(/^\/[^cms?].*/, function(req, res){
	res.render('frontend/page.ejs', {
		layout: false,
		locals: {
			path: req.url
		}
	});
});

app.listen(80);