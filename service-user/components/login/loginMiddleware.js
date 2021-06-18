'use strict'

const { check } = require('express-validator')
const loginCheck = [
  check('email').notEmpty().withMessage('Is Not Empty').exists().bail(),
  check('password').notEmpty().withMessage('Is Not Empty').exists().bail()
];

const registerCheck = [
  check('user_name').isLength({ min: 3 }).withMessage('Minimal 3 character'),
  // check('user_email').custom(email => {
  //   if (alreadyHaveEmail(email)) {
  //     throw new Error('Email already registered')
  //   }
  // }),
  check('user_email')
    .isEmail().withMessage('Enter Your Email')
    // .exists().withMessage('Email already registered')
    .notEmpty().withMessage('Is Not Empty'),
  check('user_password').notEmpty().withMessage('Is Not Empty')
]

module.exports = {
  loginCheck: loginCheck,
  registerCheck: registerCheck
}
