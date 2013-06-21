define(function(require) {
    "use strict";

    var DS = require('ember-data');
    var App = require('app/app');

    var Store = DS.Store.extend({});

    return App.Store = Store;
});