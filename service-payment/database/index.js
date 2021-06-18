'use strict'

const Sequelize = require('sequelize')
const config = require('../config')

const sequelizeMicro = new Sequelize(config.database_micro, config.user_micro, config.password_micro, {
  host: config.host_micro,
  dialect: 'mysql',
  timezone: '+07:00',
  define: {
    // underscored: false,
    freezeTableName: true,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    },
    timestamps: false
  },
  schema: config.database_micro,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
sequelizeMicro.dialect.supports.schemas = true; // add this line

sequelizeMicro.authenticate()
  .then(() => console.log('Connection has been established Database '+ config.database_micro +' successfully .'))
  .catch(err => console.error('Unable to connect to the database:', err))
// sequelize.sync()
//   .then(() => console.log('Generate TABLE'))
//   .catch(err => console.log(err))

module.exports = {
  sequelizeMicro
}
