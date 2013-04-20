var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    grid = require('../models/grid');


module.exports = {
    models: [grid],
    gridsRecords: [
        {
            name: 'Grid 1',
            description: 'A default grid.',
            grid: [
                [3, 9],
                [3, 3, 3],
                [12]
            ]
        },
        {
            name: 'Grid 2',
            description: 'Another default grid',
            grid: [
                [12],
                [6, 3]
            ]
        }
    ]
};