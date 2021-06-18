'use strict'

const db = require('../../database')
const { Sequelize } = require('sequelize')

const modelsUser = require('../../models/ms_user')
const userModels = modelsUser(db.sequelizeMicro, Sequelize)

const jwt = require('jsonwebtoken')
const config = require('../../config')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

class HandlerLogin {

  async loginUser (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      // res.sendStatus(422)
      return res.status(422).json({ errors: errors.array() })
    } else {
      const email = req.body.email
      const password = req.body.password
      try {
        if ( email && password) {
          const loginUser = await userModels.findOne({
            where: {
              user_email: email
            }
          })
          if (!loginUser) {
            return res.status(401).json({
              msgCode: 'No such user found',
              email: email
            })
          }

          if (bcrypt.compareSync(req.body.password, loginUser.user_password)) {
            const payload = { id: loginUser.user_id }
            const signOptions = {
              issuer: 'microServices',
              subject: 'NodeJsDevelopment',
              expiresIn: '2h'
              // expiresIn: 60 * 30 // 30 menit
            }
            const token = jwt.sign(payload, config.secret, signOptions)
            return res.status(200).json({
              msgCode: 'Success',
              id: loginUser.user_id,
              email: loginUser.user_email,
              token: token,
              success: true
            })
          } else {
            return res.status(401).json({ msgCode: 'Password is incorrect', status: false })
          }
        }
      } catch (err) {
        // return res.status(422).json({
        //   description: err,
        //   msgCode: 'error'
        // })
        console.log(err);
      }
    }
  }

  createUser = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      // res.sendStatus(422)
      return res.status(422).json({ errors: errors.array() })
    } else {
      const userCreate = {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
        created_date: Sequelize.literal('CURRENT_TIMESTAMP')
      }
      userModels.findOne({
        where: {
          user_email: req.body.user_email
        }
      }).then(user => {
        if (!user) {
          bcrypt.hash(req.body.user_password, 10, (_err, hash) => {
            userCreate.user_password = hash
            userModels.create(userCreate)
              .then(user => {
                res.status(200).json({
                  description: user.user_email + ' Success Create User ',
                  msgCode: 'success registered'
                })
              })
              .catch(err => {
                res.json('error: ' + err)
              })
          })
        } else {
          res.status(200).json({
            description: 'Email already exist',
            msgCode: 'already registered'
          })
        }
      }).catch(_error => {
        return res.status(422).json({
          description: _error,
          msgCode: 'error'
        })
      })
    }
  };

}

module.exports = HandlerLogin
