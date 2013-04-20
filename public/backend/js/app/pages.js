require([
    'Bootstrap',
    'views/SectionList',
    'views/PageList'
], function(
    Bootstrap,
    SectionListView,
    PageListView
){

    new SectionListView({
        el: 'body',
        content: '#pages-content'
    })

});