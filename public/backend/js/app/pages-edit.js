require([
    'Bootstrap',
    'views/PageEdit'
], function(
    Bootstrap,
    PageEditView
){

    new PageEditView({
        el: '#pages-edit-content'
    })

});