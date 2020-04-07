const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    appointment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "appointment_id"
    },
    appointment_observation: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "appointment_observation"
    },
    appointment_date: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "appointment_date"
    },
    appointment_time: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "appointment_time"
    },
    created: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created"
    },
    updated: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updated"
    },
    deleted: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "deleted"
    },
    appointment_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "appointment_user_id",
      references: {
        key: "user_id",
        model: "users_model"
      }
    }
  };
  const options = {
    tableName: "appointment",
    comment: "",
    indexes: [{
      name: "appointment_user",
      unique: false,
      type: "BTREE",
      fields: ["appointment_user_id"]
    }]
  };
  const AppointmentModel = sequelize.define("appointment_model", attributes, options);
  return AppointmentModel;
};