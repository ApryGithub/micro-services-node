'use strict'

const db = require('../../database')
const { Sequelize } = require('sequelize')

const modelsProduct = require('../../models/ms_product')
const productModels = modelsProduct(db.sequelizeMicro, Sequelize)

class handlerProduct {

    getAllProduct = (req, res) => {
        return productModels.findAll()
        .then(result => res.json({
            result,
            success: true,
            msgCode: 'Success Get All data'
        }))
        // .catch(_error => res.status(500).json({
        //     description: _error,
        //     msgCode: 'error'
        // }))
        .catch(err => console.log(err))
    };

    createProduct = (req, res) => {
        const dataProduct = {
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            product_qty: req.body.product_qty,
            created_date: Sequelize.literal('CURRENT_TIMESTAMP')
        }

        return productModels.create(dataProduct)
        .then(result => res.json({
            result,
            success: true,
            msgCode: 'Success Create'
        }))
        .catch(_error => res.status(500).json({
            description: _error,
            msgCode: 'error'
        }))
    };

    updateProduct = async (req, res) => {
        const dataProduct = {
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            product_qty: req.body.product_qty,
            updated_date: Sequelize.literal('CURRENT_TIMESTAMP'),
        }
        return productModels.update(dataProduct,{
            returning: true,
            plain: true,
            where: {
                product_id: req.body.product_id
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
    };

    updateQtyProduct = async (req, res) => {

        productModels.findOne({
            where: {
                product_id: req.body.product_id
            },
        })
        .then(result => {

          let sisaQty = result.product_qty - req.body.qty_order;

          if(sisaQty < 0){
            res.json({
              result,
              success: false,
              msgCode: 'product qty < 0'
            })
          }else{
            // res.json({
            //   result,
            //   success: true,
            //   msgCode: 'Success Detail'
            // })

            const dataProduct = {
              product_qty: sisaQty,
              updated_date: Sequelize.literal('CURRENT_TIMESTAMP'),
            }
            // console.log(dataProduct)
            return productModels.update(dataProduct,{
                returning: true,
                plain: true,
                where: {
                    product_id: req.body.product_id
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
          }
        })
        .catch(_error => res.status(500).json({
            description: _error,
            msgCode: 'error'
        }))
    };

    detailProduct = (req, res) => {
      return productModels.findOne({
          where: {
              product_id: req.body.product_id
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

    deleteProduct = (req, res) => {
      return productModels.destroy({
          where: {
              product_id: req.body.product_id
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

module.exports = handlerProduct
