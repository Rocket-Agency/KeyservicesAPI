const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    ad_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "ad_id"
    },
    ad_title: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_title"
    },
    ad_description: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_description"
    },
    ad_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_price"
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
    ad_housing_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_housing_id",
      references: {
        key: "housing_id",
        model: "housing_model"
      }
    },
    ad_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_user_id",
      references: {
        key: "user_id",
        model: "user_model"
      }
    }
  };
  const options = {
    tableName: "ad",
    comment: "",
    indexes: [{
      name: "housing",
      unique: false,
      type: "BTREE",
      fields: ["ad_housing_id"]
    }, {
      name: "user",
      unique: false,
      type: "BTREE",
      fields: ["ad_user_id"]
    }]
  };
  const AdModel = sequelize.define("ad_model", attributes, options);
  return AdModel;
};