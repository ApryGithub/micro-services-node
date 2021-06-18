'use strict'


const axios = require('axios');
// const { paymentEndPoint } = require('../../../end-point');

class handlerOrder {

    getAllPayment = (req, res) => {
      let getProduct = {
        method: 'get',
        url: 'http://localhost:2003/services-payment/payment',
        headers: {
          // Untuk Authorization simpan di session
          'Authorization': `Bearer ${req.session.token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      };
      axios(getProduct)
      .then((response) => {
        res.json(response.data)
      })
      .catch((error) => res.json({
        description: error,
        msgCode: 'error'
      }))
    };

    // createPayment = (req, res) => {
    //   const dataPayment = {
    //     order_id: req.body.order_id,
    //     amount: req.body.amount,
    //     created_date: Sequelize.literal('CURRENT_TIMESTAMP')
    //   }

    //   let postUpdateOrder = {
    //     method: 'put',
    //     url: 'http://localhost:2003/services-payment/status-update',
    //     headers: {
    //       // Untuk Authorization simpan di session
    //       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIzOTk1OTY0LCJleHAiOjE2MjQwMDMxNjQsImlzcyI6Im1pY3JvU2VydmljZXMiLCJzdWIiOiJOb2RlSnNEZXZlbG9wbWVudCJ9.v_TAzb-JK1QP52EloG1SkWwN3V84nf-VavCe8SZPnSc',
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     data : `order_id=${req.body.order_id}`
    //   };

    //   axios(postUpdateOrder)
    //   .then(response => {
    //     const dataUpdate = response.data
    //     return paymentModels.create(dataPayment)
    //     .then(result => res.json({
    //       dataUpdate,
    //       result,
    //       success: true,
    //       msgCode: 'Success Create'
    //     }))
    //     .catch(_error => res.status(500).json({
    //       description: _error,
    //       msgCode: 'error'
    //     }))
    //   })
    // };

    // updatePayment = async (req, res) => {
    //     const dataPayment = {
    //         order_id: req.body.order_id,
    //         amount: req.body.amount,
    //         updated_date: Sequelize.literal('CURRENT_TIMESTAMP'),
    //     }
    //     return paymentModels.update(dataPayment,{
    //         returning: true,
    //         plain: true,
    //         where: {
    //             payment_id: req.body.payment_id
    //         }
    //     })
    //     .then(result => res.json({
    //         result,
    //         success: true,
    //         msgCode: 'Success Update'
    //     }))
    //     .catch(_error => res.status(500).json({
    //         description: _error,
    //         msgCode: 'error'
    //     }))
    // };

    // detailPayment = (req, res) => {
    //   return paymentModels.findOne({
    //       where: {
    //           payment_id: req.body.payment_id
    //       },
    //   })
    //   .then(result => res.json({
    //       result,
    //       success: true,
    //       msgCode: 'Success Detail'
    //   }))
    //   .catch(_error => res.status(500).json({
    //       description: _error,
    //       msgCode: 'error'
    //   }))
    // };

    // deletePayment = (req, res) => {
    //   return paymentModels.destroy({
    //       where: {
    //           payment_id: req.body.payment_id
    //       }
    //   })
    //   .then(result => res.json({
    //       result,
    //       success: true,
    //       msgCode: 'Success delete'
    //   }))
    //   .catch(_error => res.status(500).json({
    //       description: _error,
    //       msgCode: 'error'
    //   }))
    // };
}

module.exports = handlerOrder
