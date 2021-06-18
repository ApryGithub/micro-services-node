'use strict'
const HandlerLogin = require('./loginHandler')
const { loginCheck } = require('./loginMiddleware')
const handlers = new HandlerLogin()

module.exports = (app) => {
  app.post('/login', loginCheck, handlers.loginUser)
}
