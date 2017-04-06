'use strict'

exports.up = (knex, Promise) => {
  return knex.schema.createTable('monsters', (table) => {
    table.increments()
    table.string('name').notNullable().unique()
    table.string('power').notNullable()
  })
};

exports.down = (knex, Promise) => knex.schema.dropTable('monsters')
