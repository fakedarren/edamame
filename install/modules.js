var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports = {
	name: 'module',
	schema: {
		moduleID: ObjectId,
		name: String
	},
	records: [
		{
			name: 'Text'
		},
		{
			name: 'Image'
		},
		{
			name: 'Articles'
		}
	]
};