define([
    'Backbone'
], function(
    Backbone
){

    return Backbone.Model.extend({
        url: '/cms/sections',
        defaults: {
            id: null,
            title: '',
            pages: []
        }
    });
    
});