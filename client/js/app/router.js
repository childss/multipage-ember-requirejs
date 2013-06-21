define(function(require) {
    "use strict";

    var App = require('app/app');

    App.Router.reopen({
        location: 'history'
    });

    App.Router.map(function() {
        this.resource('ingredients');
        this.resource('cocktails');
    });

    return App.Router;
});