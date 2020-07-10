'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Todo extends Model {

  items () {
    return this.hasMany('App/Models/TodoItem')
  }
}

module.exports = Todo
