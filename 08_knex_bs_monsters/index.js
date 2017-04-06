'use strict'

const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')
const knex = require('knex')(config[env])
const bookshelf = require('bookshelf')(knex)
