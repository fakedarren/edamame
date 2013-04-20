var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var grid = new Schema({
    gridID: ObjectId,
    name: String,
    description: String,
    grid: Array
});

module.exports = {
    name: 'grids',
    schema: grid
};