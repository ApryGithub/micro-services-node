'use strict'
const HandlerLogin = require('./loginHandler')
const { loginCheck, registerCheck } = require('./loginMiddleware')
const handlers = new HandlerLogin()

module.exports = (app) => {
  app.post('/login', loginCheck, handlers.loginUser)
  app.post('/register', registerCheck, handlers.createUser)
}
