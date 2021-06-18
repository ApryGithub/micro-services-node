'use strict'

const { check } = require('express-validator')

const createCheck = [
  check('user_name').isLength({ min: 3 }).withMessage('Minimal 3 character'),
  check('user_email')
    .isEmail().withMessage('Enter Your Email')
    .notEmpty().withMessage('Is Not Empty'),
  check('user_password').notEmpty().withMessage('Is Not Empty')
];

module.exports = {
  createCheck: createCheck
}
