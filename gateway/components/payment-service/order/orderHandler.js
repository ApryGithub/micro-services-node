'use strict'


const axios = require('axios');
// const { paymentEndPoint } = require('../../../end-point');

class handlerOrder {

    getAllOrder = (req, res) => {
      let getProduct = {
        method: 'get',
        url: 'http://localhost:2003/services-payment/order',
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

    // createOrder = (req, res) => {
    //   const dataOrder = {
    //       user_id: req.body.user_id,
    //       product_id: req.body.product_id,
    //       amount: req.body.amount,
    //       qty_order: req.body.qty_order,
    //       created_date: Sequelize.literal('CURRENT_TIMESTAMP')
    //   }

    //   let postUpdateProduct = {
    //     method: 'put',
    //     url: 'http://localhost:2002/services-user/qty-update',
    //     headers: {
    //       // Untuk Authorization simpan di session
    //       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIzOTg3MTI4LCJleHAiOjE2MjM5OTQzMjgsImlzcyI6Im1pY3JvU2VydmljZXMiLCJzdWIiOiJOb2RlSnNEZXZlbG9wbWVudCJ9.yh9wd8APpmqvUDuO5IpUO_iGU3LWozXW2CY2AZdz33Q',
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     data : `product_id=${req.body.product_id}&qty_order=${req.body.qty_order}`
    //   };
    //   // console.log(postUpdateProduct)
    //   axios(postUpdateProduct)
    //   .then(response => {
    //     // console.log(response);
    //     const dataUpdate = response.data
    //     if(dataUpdate.success != false){
    //       // console.log(dataUpdate)
    //       return orderModels.create(dataOrder)
    //       .then(result => {
    //           res.json({
    //             dataUpdate,
    //             result,
    //             success: true,
    //             msgCode: 'Success Create'
    //           })
    //       })
    //       .catch(_error => res.status(500).json({
    //           description: _error,
    //           msgCode: 'error'
    //       }))
    //     }else{
    //       res.json({
    //         update: 'Failed Insert Order'
    //       })
    //     }
    //   })
    //   // .catch(error => console.log(error))
    //   .catch(error => res.json({
    //     description: error,
    //     msgCode: 'error'
    //   }))
    // };

    // updateOrder = async (req, res) => {
    //   const dataOrder = {
    //     user_id: req.body.user_id,
    //     product_id: req.body.product_id,
    //     amount: req.body.amount,
    //     qty_order: req.body.qty_order,
    //     updated_date: Sequelize.literal('CURRENT_TIMESTAMP'),
    //   }
    //   return orderModels.update(dataOrder,{
    //     returning: true,
    //     plain: true,
    //     where: {
    //         order_id: req.body.order_id
    //     }
    //   })
    //   .then(result => res.json({
    //     result,
    //     success: true,
    //     msgCode: 'Success Update'
    //   }))
    //   .catch(_error => res.status(500).json({
    //     description: _error,
    //     msgCode: 'error'
    //   }))
    // };

    // updateStatusOrder = (req, res) => {

    //   // res.json({
    //   //   result,
    //   //   success: true,
    //   //   msgCode: 'Success Detail'
    //   // })

    //   const dataUpdateOrder = {
    //     status: 'paid',
    //     updated_date: Sequelize.literal('CURRENT_TIMESTAMP'),
    //   }

    //   return orderModels.update(dataUpdateOrder,{
    //       returning: true,
    //       plain: true,
    //       where: {
    //           order_id: req.body.order_id
    //       }
    //   })
    //   .then(result => res.json({
    //       result,
    //       success: true,
    //       msgCode: 'Success Update Status Order'
    //   }))
    //   .catch(_error => res.status(500).json({
    //       description: _error,
    //       msgCode: 'error'
    //   }))
    // };

    // detailOrder = (req, res) => {
    //   return orderModels.findOne({
    //     where: {
    //         order_id: req.body.order_id
    //     },
    //   })
    //   .then(result => res.json({
    //     result,
    //     success: true,
    //     msgCode: 'Success Detail'
    //   }))
    //   .catch(_error => res.status(500).json({
    //     description: _error,
    //     msgCode: 'error'
    //   }))
    // };

    // deleteOrder = (req, res) => {
    //   return orderModels.destroy({
    //     where: {
    //         order_id: req.body.order_id
    //     }
    //   })
    //   .then(result => res.json({
    //     result,
    //     success: true,
    //     msgCode: 'Success delete'
    //   }))
    //   .catch(_error => res.status(500).json({
    //     description: _error,
    //     msgCode: 'error'
    //   }))
    // };
}

module.exports = handlerOrder
