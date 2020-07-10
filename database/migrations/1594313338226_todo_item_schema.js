'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TodoItemSchema extends Schema {
  up () {
    this.create('todo_items', (table) => {
      table.increments()
      table.string('name')
      table.boolean('finish')
      table.datetime('finished')
      table.timestamps()
    })
  }

  down () {
    this.drop('todo_items')
  }
}

module.exports = TodoItemSchema
