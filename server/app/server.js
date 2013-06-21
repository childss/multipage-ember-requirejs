var util = require('util');
var _ = require('lodash');
var path = require('path');
var express = require('express');

var models = require('./db/models');
var handler = require('./lib/accept-handler');

var app = express();

var staticDir = __dirname + '/../../client';
app.use(express.static(staticDir));
app.use(app.router);

app.get('/ingredients', function(req, res) {
    handler()
        .accept('html', view('ingredients'))
        .accept('json', function(req, res) {
            models.Ingredient.findAll().success(function(ingredients) {
                res.send({ ingredients: ingredients });
            });
        })
        .handle(req, res);
});

app.get('/cocktails', function(req, res) {
    handler()
        .accept('html', view('cocktails'))
        .accept('json', function(req, res) {
            models.Cocktail.findAll({ include: [models.CocktailIngredients] }).success(function(cocktails) {
                res.send({ cocktails: cocktails });
            });
        })
        .handle(req, res);
});

app.listen(8080);

function view(view) {
    return function(req, res) {
        res.sendfile(path.normalize(staticDir + '/' + view + '.html'));
    }
}