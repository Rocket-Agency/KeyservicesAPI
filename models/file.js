const {
    DataTypes
  } = require('sequelize');
  
  module.exports = sequelize => {
    const attributes = {
      file_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "file_id"
      },
      file_bill_id: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "file_bill_id"
      },
      file_concierge_id: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "file_concierge_id"
      },
      file_type_service: {
        type: DataTypes.STRING(45),
        defaultValue: 0,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "file_type_service"
      },
      file_status: {
        type: DataTypes.STRING(45),
        defaultValue: 0,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "file_status"
      },
      file_user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "file_user_id",
        references: {
          key: "user_id",
          model: "users"
        }
      },
      file_ad_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "file_ad_id",
        references: {
          key: "ad_id",
          model: "ad"
        }
      },
      deleted: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "deleted"
      },
    };
    const options = {
      tableName: "file",
      comment: "",
      index: [{
        name: "file_user",
        unique: false,
        type: "BTREE",
        fields: ["file_user_id"]
      },
      {
        name: "file_ad",
        unique: false,
        type: "BTREE",
        fields: ["file_ad_id"]
      }]
    };
    const fileModel = sequelize.define("file_model", attributes, options);
    return fileModel;
  };