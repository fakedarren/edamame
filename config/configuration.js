module.exports = {
	database: process.env['DUOSTACK_DB_MONGODB'] || 'mongodb://localhost/cms',
	host: process.env['DUOSTACK_DB_MONGODB'] ? 'http://mootoolscms.duostack.net' : 'http://localhost',
	twitter: {
		consumerKey: '1nUfwvkjGTkketskwt7wKA',
		consumerSecret: 'TkJWEqxUCQfyU89lSwOw6D8keRp5FALKc7bq1UhoPnE'
	}
}