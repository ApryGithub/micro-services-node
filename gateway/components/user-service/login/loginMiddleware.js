'use strict'

const { check } = require('express-validator')
const loginCheck = [
  check('email').exists().bail(),
  check('password').exists().bail()
]

module.exports = {
  loginCheck: loginCheck
}
