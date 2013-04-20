define([
    'Backbone'
], function(
    Backbone
){

    return Backbone.Model.extend({
        url: function(){
            return this.isNew() ? '/cms/pages' : '/cms/pages/' + this.id;
        },

        idAttribute: '_id',

        defaults: {
            _id: null
        }
    });
    
});