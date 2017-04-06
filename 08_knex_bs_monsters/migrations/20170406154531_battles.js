'use strict'

exports.up = (knex, Promise) => {
  return knex.schema.createTable('battles', (table) => {
    table.increments('battle_id').primary()
    table.string('location').notNullable()
    table.integer('monster_id')
    table.integer('heroes_id')
  })
};

exports.down = (knex, Promise) => knex.schema.dropTable('battles')
