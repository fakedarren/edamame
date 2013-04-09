var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    model = require('../models/asset');


module.exports = {
    model: model,
    records: [
        {
            name: 'Pic 1',
            src: 'http://placekitten.com/200/300',
            type: 'image'
        },
        {
            name: 'Pic 2',
            src: 'http://placekitten.com/200/120',
            type: 'image'
        },
        {
            name: 'Pic 3',
            src: 'http://placekitten.com/800/300',
            type: 'image'
        },
        {
            name: 'Cage 1',
            src: 'http://www.placecage.com/c/64/64',
            type: 'image'
        },
        {
            name: 'Cage2',
            src: 'http://www.placecage.com/64/64',
            type: 'image'
        },
        {
            name: 'Spreadsheet',
            src: 'excel.xlsx',
            type: 'file'
        },
        {
            name: 'Document',
            src: 'word.docx',
            type: 'file'
        },
        {
            name: 'Video',
            src: 'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
            type: 'video'
        }
    ]
};