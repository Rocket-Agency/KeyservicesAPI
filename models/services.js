const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    service_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "service_id"
    },
     service_category: {   //produit a la carte ou pack sérenité
      type: DataTypes.STRING(11),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_category"
    },
     service_mise_en_ligne: {   
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_mise_en_ligne"
    },
     service_remise_cle: {
      type: DataTypes.STRING(11),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_remise_cle"
    },
    service_checkin_checkout: {
      type: DataTypes.STRING(11),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_checkin_checkout"
    },
    service_frigo: {
      type: DataTypes.STRING(11),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_frigo"
    },
    service_menage: {
      type: DataTypes.STRING(11),
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_menage"
    },
    service_prix_total: {
      type: DataTypes.STRING(11),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_prix_total"
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
        model: "ad"
      }
    }
  };
  const options = {
    tableName: "service",
    comment: "",
    index: [{
      name: "serviceAdId",
      unique: false,
      type: "BTREE",
      fields: ["service_ad_id"]
    }]
  };
  const ServiceModel = sequelize.define("service_model", attributes, options);
  return ServiceModel;
};