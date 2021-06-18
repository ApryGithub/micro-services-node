'use strict'

const { header } = require('express-validator')
const schemaCheck = [
  header('Authorization').exists().bail()
]
module.exports = schemaCheck
