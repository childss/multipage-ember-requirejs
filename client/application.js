require.config({
    baseUrl: 'js',
    paths: {
        'text': 'vendor/text',

        'jquery': 'vendor/jquery-2.0.2.min',
        'handlebars': 'vendor/handlebars-1.0.0-rc.4',
        'ember': 'vendor/ember-1.0.0-rc.5',
        'ember-data': 'vendor/ember-data-latest'
    },
    shim: {
        'ember': {
            deps: ['jquery', 'handlebars'],
            exports: 'Ember'
        },

        'ember-data': {
            deps: ['ember'],
            exports: 'DS'
        }
    }
});