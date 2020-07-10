'use strict'

const Todo = use('App/Models/Todo')

class TodoController {
  async fetch ({ request, response }) {
    return await Todo.all()
  }

  async add ({ request, response }) {
    const todo = new Todo()

    todo.title = request.input('title')
    await todo.save()
    return await Todo.all()
  }

  async toggle ({ request, response, params }) {
    const todo = await Todo.find(params.id)

    if (todo.finish) {
      todo.finish = false
      todo.finished = null
    } else {
      todo.finish = true
      todo.finished = new Date()
    }
    await todo.save()
    return await Todo.all()
  }

  async remove ({ request, response, params }) {
    const todo = await Todo.find(params.id)

    await todo.delete()
    return await Todo.all()
  }
}

module.exports = TodoController
