'use strict'

// components
const order   = require('../components/order/orderRoute')
const payment = require('../components/payment/paymentRoute')

module.exports = (app) => {
    order(app)
    payment(app)
}
