'use strict'
const UserHandler = require('./userHandler')
const handlers = new UserHandler()
const { isEntityFalse } = require('../../middleware')
const { createCheck } = require('./userMiddleware')
module.exports = (app) => {
  app.get('/user', handlers.getAllUser)
  app.post('/user', [isEntityFalse, createCheck], handlers.createUser)
  app.post('/user-detail', handlers.detailUser)
  app.put('/user', handlers.updateUser)
  app.delete('/user', handlers.deleteUser)
}
