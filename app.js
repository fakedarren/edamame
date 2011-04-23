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
	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({ secret: "MooToolsFTW" }));
});

var controller	= require('./classes/controller.class');
controller.initialize(app);

app.listen(80);