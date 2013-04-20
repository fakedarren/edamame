define([
    'Backbone'
], function(
    Backbone
){

    return Backbone.Model.extend({
        defaults: {
            id: null,
            name: '',
            description: '',
            grid: []
        }
    });
    
});