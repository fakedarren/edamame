
//var http = require('http');
//var fs = require('fs');

//var mongoose = require('mongoose');

var express = require('express');
var jade = require('jade');
require('mootools');

var app = express.createServer();

var controller	= require('./classes/controller.class');
controller.initialize(app);

var users = require('./classes/users.class').initialize(app);

app.listen(80);