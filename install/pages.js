var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports = {
	name: 'page',
	schema: {
		pageID: ObjectId,
		name: String,
		isRoot: Boolean
	},
	records: [
		{
			name: 'Main Navigation',
			isRoot: true
		},
		{
			name: 'Footer Navigation',
			isRoot: true
		}
	]
};