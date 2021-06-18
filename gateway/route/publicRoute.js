'use strict'

const login = require('../components/user-service/login/loginRoute')
const order = require('../components/payment-service/order/orderRoute')
const payment = require('../components/payment-service/payment/paymentRoute')

module.exports = (app) => {
  login(app)
  order(app)
  payment(app)

  app.get('/', (req, res) => {
    res.status(200).json({
      success: true,
      response: "it's Work",
      description: "Gateway App",
      copyright: 'suprianto - Apry'
    })
  })
}
