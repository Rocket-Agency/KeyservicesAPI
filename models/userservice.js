const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    userservice_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "userservice_id"
    },
    userservice_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userservice_name"
    },
    userservice_duration: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userservice_duration"
    },
    userservice_unit_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userservice_unit_price"
    },
    userservice_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userservice_price"
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
    userservice_deleted: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userservice_deleted"
    },
    userservice_ad_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userservice_ad_id",
      references: {
        key: "ad_id",
        model: "ad_model"
      }
    },
    userservice_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userservice_user_id",
      references: {
        key: "user_id",
        model: "user_model"
      }
    }
  };
  const options = {
    tableName: "userservice",
    comment: "",
    indexes: [{
      name: "userservice",
      unique: false,
      type: "BTREE",
      fields: ["userservice_user_id"]
    }, {
      name: "userservice_ad_id",
      unique: false,
      type: "BTREE",
      fields: ["userservice_ad_id"]
    }]
  };
  const UserserviceModel = sequelize.define("userservice_model", attributes, options);
  return UserserviceModel;
};