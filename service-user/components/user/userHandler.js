'use strict'

const db = require('../../database')
const { Sequelize } = require('sequelize')

const modelsUser = require('../../models/ms_user')
const userModels = modelsUser(db.sequelizeMicro, Sequelize)

const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

class handlerUser {

    getAllUser = (req, res) => {
      return userModels.findAll()
        .then(result => res.json({
          result,
          success: true,
          msgCode: 'Success Get All data'
        }))
        .catch(_error => res.status(500).json({
          description: _error,
          msgCode: 'error'
        }))
        // .catch(err => console.log(err))
    };

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
                .then(result => {
                  res.status(200).json({
                    result,
                    success: true,
                    msgCode: 'Success Create User'
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

    updateUser = async (req, res) => {
      const dataUser = {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
        updated_date: Sequelize.literal('CURRENT_TIMESTAMP')
      }

      bcrypt.hash(req.body.user_password, 10, (_err, hash) => {

      dataUser.user_password = hash

      return userModels.update(dataUser, {
        returning: true,
        plain: true,
        where: {
          user_id: req.body.user_id
        }
      })
        .then(result => res.json({
          result,
          success: true,
          msgCode: 'Success Update'
        }))
        .catch(_error => res.status(500).json({
          description: _error,
          msgCode: 'error'
        }))
      });
    };

    detailUser = (req, res) => {
      return userModels.findOne({
        where: {
          user_id: req.body.user_id
        },
      })
      .then(result => res.json({
        result,
        success: true,
        msgCode: 'Success Detail'
      }))
      .catch(_error => res.status(500).json({
        description: _error,
        msgCode: 'error'
      }))
    };

    deleteUser = (req, res) => {
      return userModels.destroy({
        where: {
          user_id: req.body.user_id
        }
      })
      .then(result => res.json({
        result,
        success: true,
        msgCode: 'Success delete'
      }))
      .catch(_error => res.status(500).json({
        description: _error,
        msgCode: 'error'
      }))
    };
}

module.exports = handlerUser
