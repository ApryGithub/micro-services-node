'use strict'

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.status(200).json({
      success: true,
      response: "it's Work",
      description: "Services Payment",
      copyright: 'Suprianto - Apry'
    })
  })
}
