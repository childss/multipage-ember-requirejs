var Sequelize = require('sequelize');

module.exports = (function() {
    return new Sequelize('Cocktails', null, null, {
        dialect: 'sqlite',
        storage: './data/cocktails.sqlite'
    });
})();
