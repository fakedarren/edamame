var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var asset = new Schema({
    assetID: ObjectId,
    name: String,
    src: String,
    type: String
});

module.exports = {
    name: 'assets',
    schema: asset
};