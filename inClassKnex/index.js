const { bookshelf } = require('./bookshelf')

const Battle = require('./models/battles')
const Monster = require('./models/monsters')

const monster = new Monster()

// monster.set('monster_name', 'Sully')
// console.log("monster", monster)
// // monster.set--method on bookshelf to add properties

// monster.save().then(function(m) {
//   console.log('Monster saved:', m.get('monster_name'))
//   // .get- can run on a return entity
// })

Monster.forge({monster_name: 'Elmo'}).fetch({withRelated: ['battles']})
.then(function(monster) {
  console.log('Got monster:', monster.get('monster_name'), monster.get('monster_id'))
  console.log('Got battles:', monster.related('battles').toJSON())
})

Battle.byLocation('rhodes').then(function(battle) {
  console.log('Got battle:', battle.get('monster_id'), battle.get('hero_id'))
})
