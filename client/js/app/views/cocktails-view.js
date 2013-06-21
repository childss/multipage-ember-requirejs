define(function(require) {
    "use strict";

    var Ember = require('ember');
    var App = require('app/app');
    var CocktailsTemplate = require('text!app/templates/cocktails.hbs');

    Ember.TEMPLATES['cocktails'] = Ember.Handlebars.compile(CocktailsTemplate);
    var CocktailsView = Ember.View.extend({
    });

    return App.CocktailsView = CocktailsView;
});