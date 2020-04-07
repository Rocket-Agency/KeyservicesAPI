const {
    DataTypes
  } = require('sequelize');
  
  module.exports = sequelize => {
    const attributes = {
      price_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "price_id"
      },
      price_starting: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: true,
        comment: null,
        field: "price_starting"
      },
      price_min: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: true,
        comment: null,
        field: "price_min"
      },
      price_max: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: true,
        comment: null,
        field: "price_max"
      }
    };
    const options = {
      tableName: "price",
      comment: "",
      indexes: []
    };
    const priceModel = sequelize.define("price_model", attributes, options);
    return priceModel;
  };