define([
    'Backbone',
    'models/Section'
], function(
    Backbone,
    Section
){

    return Backbone.Collection.extend({
        url: '/cms/sections',
        model: Section
    });

});