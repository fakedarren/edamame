require.config({
    baseUrl: '/backend/js/app/',
    paths: {
        'jQuery': 'http://code.jquery.com/jquery',
        'Bootstrap': '../libs/bootstrap.min',
        'Underscore': '../libs/lodash-underscore',
        'Backbone': '../libs/backbone',
        'Mustache': '../libs/mustache'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'Bootstrap': {
            deps: ['jQuery']
        },
        'Underscore': {
            exports: '_'
        },
        'Backbone': {
            deps: ['jQuery', 'Underscore'],
            exports: 'Backbone'
        },
        'Mustache': {
            exports: 'Mustache'
        }
    }
});
