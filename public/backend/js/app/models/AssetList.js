define([
    'Backbone',
    'models/Asset'
], function(
    Backbone,
    Asset
){

    return Backbone.Collection.extend({
        model: Asset
    });

});