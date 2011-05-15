var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var navitems = new Schema({
	name: String
});

exports.navItems = navitems;

