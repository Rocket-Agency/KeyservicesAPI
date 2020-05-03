const {
    DataTypes
  } = require('sequelize');
  
  module.exports = sequelize => {
    const attributes = {
      info_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "info_id"
      },
      info_infos: {
        type: DataTypes.STRING("300"),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "info_infos"
      },
      info_availability: {
        type: DataTypes.STRING("300"),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "info_availability"
      },
      info_area: {
        type: DataTypes.STRING("300"),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "info_area"
      },
      info_around: {
        type: DataTypes.STRING("300"),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "info_around"
      },
      info_stairs: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "info_stairs"
      },
      info_noise: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "info_noise"
      },
      info_pets: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "info_pets"
      },
      info_no_parking: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "info_no_parking"
      },
      info_shared_space: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "info_shared_space"
      },
      info_equipment_restriction: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "info_equipment_restriction"
      },
      info_monitoring_device: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "info_monitoring_device"
      },
      info_weapons: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "info_weapons"
      },
      info_dangerous_animals: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "info_dangerous_animals"
      },
      deleted: {
        type:  DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "deleted"
      }
    };
    const options = {
      tableName: "info",
      comment: "",
      indexes: []
    };
    const infoModel = sequelize.define("info_model", attributes, options);
    return infoModel;
  };