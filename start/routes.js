'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.get('/api/todo', 'TodoController.fetch')
Route.post('/api/todo', 'TodoController.add')
Route.post('/api/todo/:id/toggle', 'TodoController.toggle')
Route.delete('/api/todo/:id', 'TodoController.remove')

Route.any('*', 'NuxtController.render')
