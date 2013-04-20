define([
    'Backbone',
    'Handlebars',
    'models/Page',
    'models/Section',
    'models/SectionList'
], function(
    Backbone,
    Handlebars,
    Page,
    Section,
    SectionList
){

    return Backbone.View.extend({

        events: {
            'submit #create-section': 'createSection',
            'click #add-new-section': 'addSection',

            'submit #create-page': 'createPage',
            'click #add-new-page': 'addPage'
        },

        initialize: function(){
            this.$content = this.$el.find(this.options.content);

            this.collection = new SectionList();
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
        },

        render: function(){
            var source = $('#template-pages').html(),
                template = Handlebars.compile(source),
                html = template(this.collection.toJSON());

            this.$content.html(html);
            this.$content.find('.nav-tabs a').eq(0).click();
        },

        addSection: function(evt){
            evt.preventDefault();

            $('#modal').load(evt.target.href, function(){ 
                $("#modal").modal("show");
            });
         },

        createSection: function(evt){
            evt.preventDefault();

            var section = new Section({
                title: $('#create-section [type=text]').val()
            });
            section.save();

            this.collection.add(section);
            this.render();

            $('#modal').modal('hide')
        },

        addPage: function(evt){
            var options = '';

            evt.preventDefault();

            this.collection.forEach(function(section){
                var details = section.toJSON();
                options += '<option value="' + details._id + '">' + details.title + '</option>';
            });

            $('#modal').load(evt.target.href, function(){ 
                $("#modal").modal("show");
                $('#create-page select').html(options);
            });
        },

        createPage: function(evt){
            evt.preventDefault();

            var page = new Page({
                sectionID: $('#create-page select').val(),
                title: $('#create-page [type=text]').val()
            });
            page.save();

            this.collection.fetch();
            this.render();

            $('#modal').modal('hide')
        },

        remove: function(evt){
            console.log('remove');
        }

    });

});