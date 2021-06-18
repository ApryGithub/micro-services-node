'use strict'
const { check } = require('express-validator')
const paymentCheck = [
    check('order_id')
      .notEmpty().withMessage('Is Not Empty')
      .exists().bail(),
    check('amount')
      .isInt().withMessage('Only Integer')
      .notEmpty().withMessage('Is Not Empty')
      .bail(),
]
module.exports = {
  paymentCheck: paymentCheck

}
