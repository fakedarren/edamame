define([
    'Backbone',
    'Handlebars',
    'models/SectionList'
], function(
    Backbone,
    Handlebars,
    SectionList
){

    return Backbone.View.extend({

        events: {
        },

        initialize: function(){
            this.collection = new SectionList();
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
        },

        render: function(){
            var source = $('#template-pages').html(),
                template = Handlebars.compile(source),
                html = template(this.collection.toJSON());

            console.log(this.collection.toJSON());

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