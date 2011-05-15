var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports = {
	name: 'asset',
	schema: {
		assetID: ObjectId,
		name: String,
		path: String,
		type: String
	},
	records: [
		{
			name: 'Pic 1',
			path: 'http://placekitten.com/200/300',
			type: 'image'
		},
		{
			name: 'Pic 2',
			path: 'http://placekitten.com/200/120',
			type: 'image'
		},
		{
			name: 'Pic 3',
			path: 'http://placekitten.com/800/300',
			type: 'image'
		}
	]
};