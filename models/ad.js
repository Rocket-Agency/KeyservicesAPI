const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    ad_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "ad_id"
    },
    ad_title: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      comment: null,
      field: "ad_title"
    },
    ad_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: false,
      comment: null,
      field: "ad_description"
    },
    ad_capacity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      comment: null,
      field: "ad_capacity"
    },
    ad_notice: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      comment: null,
      field: "ad_notice"
    },
    ad_arrival_time: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      comment: null,
      field: "ad_arrival_time"
    },
    ad_departure_time: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      comment: null,
      field: "ad_departure_time"
    },
    ad_min_night: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      comment: null,
      field: "ad_min_night"
    },
    ad_max_night: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      comment: null,
      field: "ad_max_night"
    },
    ad_starting_date: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      comment: null,
      field: "ad_starting_date"
    },
    ad_ending_date: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      comment: null,
      field: "ad_ending_date"
    },
    deleted: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      comment: null,
      field: "deleted"
    },
    ad_housing_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      comment: null,
      field: "ad_housing_id",
      references: {
        key: "housing_id",
        model: "housing"
      }
    },
    ad_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      comment: null,
      field: "ad_user_id",
      references: {
        key: "user_id",
        model: "users"
      }
    },
    ad_housing_price_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      comment: null,
      field: "ad_housing_price_id",
      references: {
        key: "price_id",
        model: "price"
      }
    }
  };
  const options = {
    tableName: "ad",
    comment: "",
    index: [{
      name: "adHousingID",
      unique: true,
      type: "BTREE",
      fields: ["ad_housing_id"]
    }, {
      name: "adUserID",
      unique: true,
      type: "BTREE",
      fields: ["ad_user_id"]
    }, {
      name: "adPriceID",
      unique: true,
      type: "BTREE",
      fields: ["ad_housing_price_id"]
    }]
  };
  const AdModel = sequelize.define("ad_model", attributes, options);
  return AdModel;
};