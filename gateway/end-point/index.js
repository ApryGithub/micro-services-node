'use strict'

const axios = require('axios')

const userEndPoint = axios.create({
  baseURLUser: "http://localhost:2002/"
});

const paymentEndPoint = axios.create({
  baseURLUser: 'http://localhost:2003/'
});

module.exports = {
  userEndPoint,
  paymentEndPoint
}
