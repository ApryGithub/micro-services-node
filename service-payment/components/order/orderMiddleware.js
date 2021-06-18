'use strict'
const { check } = require('express-validator')
const orderCheck = [
    check('user_id')
      .notEmpty().withMessage('Is Not Empty')
      .exists().bail(),
    check('product_id').notEmpty().withMessage('Is Not Empty').bail(),
    check('amount')
      .isInt().withMessage('Only Integer')
      .notEmpty().withMessage('Is Not Empty')
      .bail(),
    check('qty_order')
      .isInt().withMessage('Only Integer')
      .notEmpty().withMessage('Is Not Empty')
      .bail(),
]
module.exports = {
  orderCheck: orderCheck

}
