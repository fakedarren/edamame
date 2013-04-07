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
        }

    });

});