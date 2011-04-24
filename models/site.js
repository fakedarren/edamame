var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/cms');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var navitems = new Schema({
	name: String
});

exports.navItems = navitems;

