'use strict'
const { check } = require('express-validator')
const productCheck = [
    check('product_name')
      .isLength({ min: 3 }).withMessage('Minimal 3 character')
      .notEmpty().withMessage('Is Not Empty')
      .exists().bail(),
    check('product_price').notEmpty().withMessage('Is Not Empty').bail(),
    check('product_qty')
      .isInt().withMessage('Only Integer')
      .notEmpty().withMessage('Is Not Empty')
      .bail(),
]
module.exports = {
  productCheck: productCheck

}
