define([
    'Backbone',
    'Mustache',
    'models/PageList'
], function(
    Backbone,
    Mustache,
    PageList
){

    return Backbone.View.extend({

        events: {
            'click #create-page button': 'create',
            'click .edit': 'edit',
            'click .remove': 'remove',
        },

        initialize: function(){
            this.collection = new PageList();
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
        },

        render: function(){
            var html = '',
                template = $('#template-page-list-item').html();

            this.collection.forEach(function(page){
                html += Mustache.render(template, page.toJSON());
            });

            this.$el.html(html);
        },

        create: function(evt){
            console.log('create');
        },

        remove: function(evt){
            evt.preventDefault();

            var id = $(evt.currentTarget).attr('data-id'),
                model = this.collection.get(id);

            model.destroy(function(){
                this.collection.sync();
            });
        }

    });

});