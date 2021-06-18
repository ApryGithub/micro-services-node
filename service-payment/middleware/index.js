'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config')
const { validationResult } = require('express-validator')

// Check JWT Token Access
const checkToken = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    // Is not Header Authorization
    // res.sendStatus(422)
    return res.status(422).json({
      success: false,
      errors: errors.array()
    })
  } else {
    let token = req.headers['x-access-token'] || req.headers.authorization
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length)
    }
    if (token) {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          // Header Authorization and is TOKEN expired or not equals
          return res.json({
            success: false,
            msgCode: 'Token is not valid'
          })
        } else {
          req.decoded = decoded
          // console.log(req.decoded);
          // res.json(decoded)
          next()
        }
      })
    } else {
      // Header Authorization and not Bearer TOKEN
      return res.json({
        success: false,
        msgCode: 'Auth token is not supplied'
      })
    }
  }
}

const isEntityFalse = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(422).json({
      success: false,
      errors: errors.array()
    })
  } else {
    next()
  }
}

module.exports = {
  checkToken: checkToken,
  isEntityFalse: isEntityFalse
}
