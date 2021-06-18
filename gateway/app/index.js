'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const publicRoute = require('../route/publicRoute')
const session = require('express-session');

app.use(session({
  secret: 'micros3cr3t@s3ss10n',
  // resave: true,
  // saveUninitialized: true
  resave: false,
  saveUninitialized:false,
  cookie:{
    maxAge: 2 * 60 * 1000
  }
}));

// app.get('/', (req, res) => {
//   res.status(200).json({
//     success: true,
//     response: "it's Work",
//     description: "Gateway App",
//     copyright: 'suprianto - Apry'
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


module.exports = app
