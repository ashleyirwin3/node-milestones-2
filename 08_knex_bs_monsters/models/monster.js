'use strict'

const Monster = bookshelf.Model.extend({
  tableName: 'monsters'
})

let Monster = new Monster()
monster.set('monster_name', 'Esme Squalor')

monster.save().then(function(newMonster) {
  console.log('Monster was added:', newMonster.get('monster_name'))
})

module.exports = Monster
