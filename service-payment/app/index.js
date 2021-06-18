'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const ProtectedRoutes = express.Router()
const middleware = require('../middleware')
const schemaCheck = require('../middleware/schemaCheck')
const publicRoute = require('../route/publicRoute')
const protectedRoute = require('../route/protectedRoute')

// app.get('/', (req, res) => {
//   res.status(200).json({
//     success: true,
//     response: "it's Work",
//     description: "Services Payment",
//     copyright: 'Suprianto - Apry'
//   })
// })

app.use(express.json({
  limit: '300kb'
}))
app.disable('x-powered-by')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

publicRoute(app)

app.use('/services-payment', schemaCheck, ProtectedRoutes)
ProtectedRoutes.use(middleware.checkToken)
protectedRoute(ProtectedRoutes)

module.exports = app
