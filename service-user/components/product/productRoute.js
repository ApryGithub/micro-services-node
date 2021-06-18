'use strict'
const ProductHandler = require('./productHandler')
const handlers = new ProductHandler()
const { isEntityFalse } = require('../../middleware')
const { productCheck } = require('./productMiddleware')
module.exports = (app) => {
  app.get('/product', handlers.getAllProduct)
  app.post('/product', [productCheck, isEntityFalse], handlers.createProduct)
  app.post('/product-detail', handlers.detailProduct)
  app.put('/product', handlers.updateProduct)
  app.put('/qty-update', handlers.updateQtyProduct)
  app.delete('/product', handlers.deleteProduct)
}
