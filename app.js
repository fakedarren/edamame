var express = require('express');
var jade = require('jade');
require('mootools');

var app = express.createServer();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');

var controller	= require('./classes/controller.class');
controller.initialize(app);

var users = require('./classes/users.class').initialize(app);

app.listen(80);