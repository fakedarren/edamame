var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports = {
	name: 'article',
	schema: {
		articleID: ObjectId,
		title: '',
		body: '',
		state: Number
	},
	records: [
		{
			title: 'I am a blog post',
			body: '<h1>Blog post</h1><p>I am a blog post</p>',
			state: 0
		},
		{
			title: 'I am another blog post',
			body: '<h1>Another Blog post</h1><p>I am a blog post</p>',
			state: 1
		}
	]
};