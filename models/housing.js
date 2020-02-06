const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    housing_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "housing_id"
    },
    housing_type_property: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_type_property"
    },
    housing_type: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_type"
    },
    housing_start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_start_date"
    },
    housing_end_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_end_date"
    },
    housing_capacity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_capacity"
    },
    housing_arrival_at: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_arrival_at"
    },
    housing_departure_at: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_departure_at"
    },
    housing_observation: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_observation"
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
    housing_adress_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_adress_id",
      references: {
        key: "address_id",
        model: "address_model"
      }
    },
    housing_equipment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_equipment_id",
      references: {
        key: "equipment_id",
        model: "equipment_model"
      }
    }
  };
  const options = {
    tableName: "housing",
    comment: "",
    indexes: [{
      name: "address",
      unique: false,
      type: "BTREE",
      fields: ["housing_adress_id"]
    }, {
      name: "equipment",
      unique: false,
      type: "BTREE",
      fields: ["housing_equipment_id"]
    }]
  };
  const HousingModel = sequelize.define("housing_model", attributes, options);
  return HousingModel;
};