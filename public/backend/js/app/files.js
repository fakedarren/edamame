require([
    'Bootstrap',
    'views/AssetList'
], function(
    Bootstrap,
    AssetListView
){

    window.foo = new AssetListView({
        el: '#files-library',
        type: 'file'
    });

});