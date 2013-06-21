define(function(require) {
    "use strict";

    var Ember = require('ember');

    require('ember-data');

    var App = window.App = Ember.Application.create({
        rootElement: '#main'
    });

    App.deferReadiness();

    return App;
});