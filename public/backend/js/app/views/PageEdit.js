define([
    'Backbone',
    'Handlebars',
    'helpers/URL',
    'models/Page'
], function(
    Backbone,
    Handlebars,
    URL,
    Page
){

    return Backbone.View.extend({

        events: {
            'submit #edit-page': 'update'
        },

        initialize: function(){
            this.model = new Page({
                _id: URL.last()
            });
            this.model.fetch();
            this.model.on('sync', this.render, this);
        },

        render: function(){
            var source = $('#template-page-edit-form').html(),
                template = Handlebars.compile(source),
                html = template(this.model.toJSON());

            this.$el.html(html);
        },

        update: function(evt){
            evt.preventDefault();

            this.model.set('title', $('#edit-page [type=text]').val());
            this.model.save();
        }

    });

});