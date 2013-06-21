var _ = require('lodash');
var Sequelize = require('sequelize');

var db = require('./app/db/db');
var models = require('./app/db/models');

db.drop();
db.sync();

var Ingredients = {};
makeIngredients(Ingredients, {
    Rum: 'Rum',
    Gin: 'Gin',
    Lime: 'Lime',
    Sugar: 'Sugar',
    Mint: 'Mint',
    Ice: 'Ice',
    ClubSoda: 'Club Soda',
    Tonic: 'Tonic Water'
}).success(function() {

    cocktail('Mojito', [
        { ingredient: Ingredients.Rum, measurement: '1 1/2 oz' },
        { ingredient: Ingredients.Lime, measurement: '1/2 lime' },
        { ingredient: Ingredients.Sugar, measurement: '1 tbsp' },
        { ingredient: Ingredients.Mint, measurement: '10 leaves' },
        { ingredient: Ingredients.Ice, measurement: '1 cup' },
        { ingredient: Ingredients.ClubSoda, measurement: '1/2 cup' }
    ]);

    cocktail('Gin and Tonic', [
        { ingredient: Ingredients.Gin, measurement: '2 oz' },
        { ingredient: Ingredients.Tonic, measurement: '5 oz' },
        { ingredient: Ingredients.Lime, measurement: '1 wedge' }
    ]);

});

function makeIngredients(Ingredients, ingredientMap) {
    var script = new Sequelize.Utils.QueryChainer();
    _.forIn(ingredientMap, function(name, key) {
        script.add(models.Ingredient.create({ name: name }).success(function(ingredient) {
            Ingredients[key] = ingredient;
        }));
    });

    return script.run();
}

function cocktail(name, ingredients) {
    var setIngredients = _.partialRight(setCocktailIngredients, ingredients);
    var cocktailModel = models.Cocktail.build({name: name});
    cocktailModel.save().success(setIngredients);
    return cocktailModel;
}

function setCocktailIngredients(cocktail, ingredients) {
    _.each(ingredients, function(it) {
        models.CocktailIngredients.create({
            measurement: it.measurement,
            IngredientId: it.ingredient.id,
            CocktailId: cocktail.id
        });
    });
}
