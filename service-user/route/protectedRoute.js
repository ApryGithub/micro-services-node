'use strict'

// components
const user    = require('../components/user/userRoute')
const product = require('../components/product/productRoute')

module.exports = (app) => {
    user(app)
    product(app)
}
