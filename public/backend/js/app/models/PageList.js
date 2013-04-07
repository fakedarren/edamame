define([
    'Backbone',
    'models/Page'
], function(
    Backbone,
    Page
){

    return Backbone.Collection.extend({
        url: '/cms/pages',
        model: Page
    });

});