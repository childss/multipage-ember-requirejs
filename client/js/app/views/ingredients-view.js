define(function(require) {
    "use strict";

    var Ember = require('ember');
    var App = require('app/app');
    var IngredientsTemplate = require('text!app/templates/ingredients.hbs');

    Ember.TEMPLATES['ingredients'] = Ember.Handlebars.compile(IngredientsTemplate);
    var IngredientsView = Ember.View.extend({
    });

    return App.IngredientsView = IngredientsView;
});