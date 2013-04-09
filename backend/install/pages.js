var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    model = require('../models/page');


module.exports = {
    model: model,
    records: [
        {
            title: 'My Page'
        },
        {
            title: 'My Other Page'
        }
    ]
};