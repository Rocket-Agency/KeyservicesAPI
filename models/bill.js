const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    bill_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "bill_id"
    },
    bill_location: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "bill_location"
    },
    bill_status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "bill_status"
    },
    bill_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "bill_user_id",
      references: {
        key: "user_id",
        model: "users_model"
      }
    }
  };
  const options = {
    tableName: "bill",
    comment: "",
    index: [{
      name: "bill_user",
      unique: false,
      type: "BTREE",
      fields: ["bill_user_id"]
    }]
  };
  const BillModel = sequelize.define("bill_model", attributes, options);
  return BillModel;
};