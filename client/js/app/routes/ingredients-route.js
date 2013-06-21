define(function(require) {
    "use strict";

    var Ember = require('ember');
    var App = require('app/app');
    var Ingredient = require('app/models/ingredient');

    var IngredientsRoute = Ember.Route.extend({
        model: function() {
            return Ingredient.find();
        }
    });

    return App.IngredientsRoute = IngredientsRoute;
});