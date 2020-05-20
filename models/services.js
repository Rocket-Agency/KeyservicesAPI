const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    service_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "service_id"
    },
     service_category: {   //produit a la carte ou pack sérenité
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_category"
    },
     service_type: {   //name si produit a la carte{
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_price"
    },
     service_price: {
      type: DataTypes.STRING(11),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_price"
    },
     service_deleted: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_deleted"
    },
     service_ad_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_ad_id",
      references: {
        key: "ad_id",
        model: "ad_model"
      }
    }
  };
  const options = {
    tableName: "service",
    comment: "",
    indexes: [{
      name: "service_ad_id",
      unique: false,
      type: "BTREE",
      fields: ["service_ad_id"]
    }]
  };
  const ServiceModel = sequelize.define("service_model", attributes, options);
  return ServiceModel;
};