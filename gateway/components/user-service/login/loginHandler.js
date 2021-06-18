'use strict'

// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const axios = require('axios');

class HandlerLogin {

  async loginUser (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    } else {
      const email = req.body.email
      const password = req.body.password
      let postLogin = {
        method: 'post',
        url: 'http://localhost:2002/login',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : `email=${email}&password=${password}`
      };

      axios(postLogin)
      .then((response) => {
        const dataLogin = response.data
        req.session.loggedin = true;
        req.session.user_id = dataLogin.id;
        req.session.token = dataLogin.token;
        res.json({
          dataLogin,
          status: true,
          id: dataLogin.id,
          email: dataLogin.email,
          token: dataLogin.token,
        })
      })
      .catch((_error) =>
        res.status(500).json({
          description: _error,
          msgCode: 'error'
        })
        // console.log(_error)
      )
    }
  }
}

module.exports = HandlerLogin
