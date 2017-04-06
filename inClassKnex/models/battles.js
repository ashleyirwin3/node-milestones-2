const { bookshelf } = require('../bookshelf.js')

// defines a model
let Battle = bookshelf.Model.extend( {
  tableName: 'battles',
  monster: function() {
    return this.belongsTo('Monster', 'monster_id')
  }
},  { // creates instance of a model
    byLocation: function(location) {
      return this.forge().query({where:{location: location}}).fetch() // go find every battle that meets what is passed in // .fetch runs it
      // forge() -- make new instance of model -- in this case, battle
  }
})

module.exports = bookshelf.model('Battle', Battle)
