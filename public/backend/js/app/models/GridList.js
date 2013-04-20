define([
    'Backbone',
    'models/Grid'
], function(
    Backbone,
    Grid
){

    return Backbone.Collection.extend({
        url: '/cms/grids',
        model: Grid
    });

});