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
      autoIncrement: true,
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
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_description"
    },
    ad_capacity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_capacity"
    },
    ad_notice: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_notice"
    },
    ad_arrival_time: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_arrival_time"
    },
    ad_departure_time: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_departure_time"
    },
    ad_min_night: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_min_night"
    },
    ad_max_night: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_max_night"
    },
    ad_starting_date: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_departure_time"
    },
    ad_ending_date: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_departure_time"
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
        model: "users_model"
      }
    },
    ad_housing_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ad_housing_price_id",
      references: {
        key: "housing_price_id",
        model: "housingPrice_model"
      }
    }
  };
  const options = {
    tableName: "ad",
    comment: "",
    indexes: [{
      name: "adHousing",
      unique: false,
      type: "BTREE",
      fields: ["ad_housing_id"]
    }, {
      name: "adUser",
      unique: false,
      type: "BTREE",
      fields: ["ad_user_id"]
    }, {
      name: "adHousingPrice",
      unique: false,
      type: "BTREE",
      fields: ["ad_housing_price_id"]
    }]
  };
  const AdModel = sequelize.define("ad_model", attributes, options);
  return AdModel;
};