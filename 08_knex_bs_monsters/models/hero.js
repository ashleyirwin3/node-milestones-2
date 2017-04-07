'use strict'

const Hero = bookshelf.Model.extend({
  tableName = 'heroes'
})

let Hero = new Hero()
hero.set('hero_name', 'Hector')

hero.save().then(function(newHero) {
  console.log('Hero was added:', newHero.get('hero_name'))
})

module.exports = Hero
