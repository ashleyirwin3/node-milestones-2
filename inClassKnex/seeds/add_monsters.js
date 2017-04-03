
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        {monster_id: 2},
        {monster_id: 3},
        {monster_id: 4}
      ]);
    });
};
