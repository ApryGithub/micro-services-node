/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ms_product', {
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    product_qty: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'ms_product'
  });
};
