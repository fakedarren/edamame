var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var assets = new Schema({
	assetID: ObjectId,
	name: String,
	path: String,
	type: String
});

exports.assets = assets;

