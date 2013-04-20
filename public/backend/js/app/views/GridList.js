define([
    'Backbone',
    'Handlebars',
    'models/GridList'
], function(
    Backbone,
    Handlebars,
    GridList
){

    return Backbone.View.extend({

        events: {
            'click #create-page button': 'create',
            'click .edit': 'edit',
            'click .remove': 'remove'
        },

        initialize: function(){
            this.collection = new GridList();
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
        },

        render: function(){
            var source = $('#template-grid-list-item').html(),
                template = Handlebars.compile(source),
                html = '';
            
            this.collection.forEach(function(grid){
                html += template(grid.toJSON());
            });

            this.$el.html(html);
        },

        create: function(evt){
            console.log('create');
        },

        remove: function(evt){
            console.log('remove');
        }

    });

});