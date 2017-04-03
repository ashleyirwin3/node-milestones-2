
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heroes').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {hero_name: 'Joel'},
        {hero_name: 'Joel 1'},
        {hero_name: 'Joel 2'}
      ]);
    });
};
