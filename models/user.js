var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var User = new Schema({
	name: String,
	password: String
});

exports.User = User;