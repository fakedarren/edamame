require([
    'Bootstrap',
    'views/AssetList'
], function(
    Bootstrap,
    AssetListView
){

    window.foo = new AssetListView({
        el: '#images-library',
        type: 'images'
    });

});