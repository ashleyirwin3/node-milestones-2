'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('battles').del()
    .then(function () {
      // Inserts seed entries
      return knex('battles').insert([
        {location: 'The Vile Village', monster_id: 1, heroes_id: 1},
        {location: 'Hogwarts', monster_id: 2, heroes_id: 2},
        {location: 'France', monster_id: 3, heroes_id: 3}
      ]);
    });
};
