'use strict'

const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  secret: process.env.SECRET,
  env: process.env.NODE_ENV,

  database_micro: process.env.MICRO_DATABASE,
  user_micro: process.env.MICRO_USERNAME,
  password_micro: process.env.MICRO_PASSWORD,
  host_micro: process.env.MICRO_HOSTDATABASE,
}
