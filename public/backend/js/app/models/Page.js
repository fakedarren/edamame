define([
    'Backbone'
], function(
    Backbone
){

    return Backbone.Model.extend({
        url: '/cms/pages',
        defaults: {
            id: null,
            sectionID: '',
            title: ''
        }
    });
    
});