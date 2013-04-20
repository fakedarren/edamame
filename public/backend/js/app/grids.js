require([
    'Bootstrap',
    'views/GridList'
], function(
    Bootstrap,
    GridListView
){

    new GridListView({
        el: '#grids-content'
    })

});