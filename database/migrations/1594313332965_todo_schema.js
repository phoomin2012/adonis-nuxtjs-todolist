'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TodoSchema extends Schema {
  up () {
    this.create('todos', (table) => {
      table.increments()
      table.string('title')
      table.boolean('finish').defaultTo(false)
      table.datetime('finished').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('todos')
  }
}

module.exports = TodoSchema
