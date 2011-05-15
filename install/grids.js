var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports = {
	name: 'grid',
	schema: {
		gridID: ObjectId,
		name: String
	},
	records: [
		{
			name: '2 Column'
		},
		{
			name: '3 Column'
		},
		{
			name: '1 Column'
		}
	]
};