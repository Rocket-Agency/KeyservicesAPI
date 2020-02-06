const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    shoppingbasket_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "shoppingbasket_id"
    },
    shoppingbasket_meat: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "shoppingbasket_meat"
    },
    shoppingbasket_fruit: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "shoppingbasket_fruit"
    },
    shoppingbasket_vegetable: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "shoppingbasket_vegetable"
    },
    shoppingbasket_fish: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "shoppingbasket_fish"
    },
    shoppingbasket_utility: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "shoppingbasket_utility"
    },
    shoppingbasket_observation: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "shoppingbasket_observation"
    },
    shoppingbasket_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "shoppingbasket_price"
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created"
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updated"
    },
    deleted: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "deleted"
    },
    shoppingbasket_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "shoppingbasket_user_id",
      references: {
        key: "user_id",
        model: "user_model"
      }
    }
  };
  const options = {
    tableName: "shoppingbasket",
    comment: "",
    indexes: [{
      name: "shoppingbasket_user",
      unique: false,
      type: "BTREE",
      fields: ["shoppingbasket_user_id"]
    }]
  };
  const ShoppingbasketModel = sequelize.define("shoppingbasket_model", attributes, options);
  return ShoppingbasketModel;
};