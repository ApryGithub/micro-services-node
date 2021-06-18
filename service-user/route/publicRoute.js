'use strict'

const login = require('../components/login/loginRoute')

module.exports = (app) => {
  login(app)

  app.get('/', (req, res) => {
    res.status(200).json({
      success: true,
      response: "it's Work",
      description: "Services User",
      copyright: 'Suprianto - Apry'
    })
  })
}
