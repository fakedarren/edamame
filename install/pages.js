var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports = {
	name: 'page',
	schema: {
		pageID: ObjectId,
		name: String,
		url: String,
		isRoot: Boolean,
		parent: String
	},
	records: [
		{
			name: 'Main Navigation',
			isRoot: true
		},
		{
			name: 'Home',
			url: '/',
			isRoot: false,
			parent: 'Main Navigation'
		},
		{
			name: 'About',
			url: '/about',
			isRoot: false,
			parent: 'Main Navigation'
		},
		{
			name: 'Contact Us',
			url: '/contact-us',
			isRoot: false,
			parent: 'Main Navigation'
		},
		{
			name: 'Footer Navigation',
			isRoot: true
		}
	]
};