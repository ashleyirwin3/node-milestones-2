'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        {name: 'Count Olaf', power: 'Continuous Treachery'},
        {name: 'Lord Voldemort', power: 'Weird Nose'},
        {name: 'Gaston', power: 'Infinite Talking'}
      ]);
    });
};
