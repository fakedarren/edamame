var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    section = require('../models/section'),
    page = require('../models/page'),
    _ = require('lodash');


module.exports = {
    models: [section, page],
    data: [
        {
            title: 'Main Navigation',
            pages: [
                {
                    title: 'My Page'
                },
                {
                    title: 'My Other Page'
                },
                {
                    title: 'My Third Page'
                }
            ]
        }
    ],
    installer: function(){
        var db = global.db;
        var SectionObject = db.model(section.name),
            sections = new SectionObject(),
            PageObject = db.model(page.name),
            pages = new PageObject();

        sections.collection.drop();
        pages.collection.drop();

        _(this.data).each(function(sectionObj){
            var s = new SectionObject();
            s.title = sectionObj.title;
            s.save();

            _(sectionObj.pages).each(function(pageObj){
                var p = new PageObject();
                p.sectionID = s._id;
                p.title = pageObj.title;
                p.save();
            });
        });
    }
};