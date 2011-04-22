var mongoose = require('mongoose');
require('mootools');

var db = mongoose.connect('mongodb://localhost/cms');

mongoose.model("User", require("../models/user").User);
var mongoose = require("mongoose");
var User = mongoose.model("User");

var Users = new Class({

	initialize: function(){
	},
	
	yo: function(){
		console.log('yo');
	}

});

module.exports = new Users();