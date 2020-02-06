const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    payment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "payment_id"
    },
    payment_status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "payment_status"
    },
    payment_bill_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "payment_bill_id"
    },
    payment_observation: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "payment_observation"
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created"
    }
  };
  const options = {
    tableName: "payment",
    comment: "",
    indexes: []
  };
  const PaymentModel = sequelize.define("payment_model", attributes, options);
  return PaymentModel;
};