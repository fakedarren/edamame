require([
    'Bootstrap',
    'views/PageList'
], function(
    Bootstrap,
    PageListView
){

    window.foo = new PageListView({
        el: '#tab-main-navigation'
    });

});