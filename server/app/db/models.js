var Sequelize = require('sequelize');
var db = require('./db');

var Ingredient = db.define('Ingredient', {
    name: Sequelize.STRING
});

var Cocktail = db.define('Cocktail', {
    name: Sequelize.STRING
});

var CocktailIngredients = db.define('CocktailIngredients', {
    measurement: Sequelize.STRING,
});

Cocktail.hasMany(CocktailIngredients);
Ingredient.hasMany(CocktailIngredients);
CocktailIngredients.belongsTo(Cocktail);
CocktailIngredients.belongsTo(Ingredient);

exports.Ingredient = Ingredient;
exports.Cocktail = Cocktail;
exports.CocktailIngredients = CocktailIngredients;
