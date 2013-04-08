require([
    'Bootstrap',
    'views/AssetList'
], function(
    Bootstrap,
    AssetListView
){

    window.foo = new AssetListView({
        el: '#videos-library',
        type: 'videos'
    });

});