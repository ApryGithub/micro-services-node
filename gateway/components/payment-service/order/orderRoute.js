'use strict'
const OrderHandler = require('./orderHandler')
const handlers = new OrderHandler()
const { isEntityFalse } = require('../../../middleware')
const { orderCheck } = require('./orderMiddleware')
module.exports = (app) => {
  app.get('/order', handlers.getAllOrder)
  // app.post('/order', [orderCheck, isEntityFalse], handlers.createOrder)
  // app.post('/order-detail', handlers.detailOrder)
  // app.put('/order', handlers.updateOrder)
  // app.put('/status-update', handlers.updateStatusOrder)
  // app.delete('/order', handlers.deleteOrder)
}
