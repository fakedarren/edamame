var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var articles = new Schema({
	articleID: ObjectId,
	title: '',
	body: '',
	state: Number
});

exports.articles = articles;

