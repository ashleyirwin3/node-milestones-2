'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heroes').del()
    .then(function () {
      // Inserts seed entries
      return knex('heroes').insert([
        {name: 'Violet Baudelaire', power: 'Inventing Skills'},
        {name: 'Hermione Granger', power: 'Intelligence'},
        {name: 'Belle', power: 'Inventing SKills and Intelligence'}
      ]);
    });
};
