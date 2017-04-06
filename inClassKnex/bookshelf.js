const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile');
const knex = require('knex')(config[env]);
const bookshelf = require('bookshelf')(knex);

// you have to tell bookshelf to use the plugins you want to use
// eliminates circular dependency problems
bookshelf.plugin('registry')

module.exports = {bookshelf}
