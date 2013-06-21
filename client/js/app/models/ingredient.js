define(function(require) {
    "use strict";

    var DS = require('ember-data');
    var App = require('app/app');

    require('app/models/store');

    var Ingredient = DS.Model.extend({
        name: DS.attr('string')
    });

    return App.Ingredient = Ingredient;
});