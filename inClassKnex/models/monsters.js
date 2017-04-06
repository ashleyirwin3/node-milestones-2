const { bookshelf } = require('../bookshelf.js')

require('./battles')

const Monster = bookshelf.Model.extend( {
  tableName: 'monsters',
  idAttribute: 'monster_id',
  battles: function() {
    // set battles on monsters because of many to many relationship
    return this.hasMany('Battle', 'monster_id')
  }
})

// require a string of the model and the model itself
module.exports = bookshelf.model('Monster', Monster)
