'use strict'
const PaymentHandler = require('./paymentHandler')
const handlers = new PaymentHandler()
// const { isEntityFalse } = require('../../middleware')
// const { paymentCheck } = require('./paymentMiddleware')
module.exports = (app) => {
  app.get('/payment', handlers.getAllPayment)
  // app.post('/payment', [paymentCheck, isEntityFalse], handlers.createPayment)
  // app.post('/payment-detail', handlers.detailPayment)
  // app.put('/payment', handlers.updatePayment)
  // app.delete('/payment', handlers.deletePayment)
}
