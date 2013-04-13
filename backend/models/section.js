var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var section = new Schema({
    pageID: ObjectId,
    title: String
});

module.exports = {
    name: 'sections',
    schema: section
};