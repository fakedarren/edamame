var express = require('express');
var jade = require('jade');
require('mootools');

var app = express.createServer();

app.configure(function(){
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    app.set('view options', { layout: 'shared/layout' });
    app.use(express.static(__dirname + '/public'));
});

var controller	= require('./classes/controller.class');
controller.initialize(app);

var users = require('./classes/users.class').initialize(app);

app.listen(80);