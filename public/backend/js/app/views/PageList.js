define([
    'Backbone',
    'Handlebars',
    'models/PageList'
], function(
    Backbone,
    Handlebars,
    PageList
){

    return Backbone.View.extend({

        events: {
            'click #create-page button': 'create',
            'click .edit': 'edit',
            'click .remove': 'remove'
        },

        initialize: function(){
            this.collection = new PageList();
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
        },

        render: function(){
            var source = $('#template-page-list-item').html(),
                template = Handlebars.compile(source),
                html = '';
            
            this.collection.forEach(function(page){
                html += template(page.toJSON());
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