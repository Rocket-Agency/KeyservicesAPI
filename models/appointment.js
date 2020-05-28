const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    appointment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "appointment_id"
    },
    appointment_date: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "appointment_date"
    },
    appointment_time: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "appointment_time"
    },

    appointment_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "appointment_user_id",
      references: {
        key: "user_id",
        model: "users"
      }
    }
  };
  const options = {
    tableName: "appointment",
    comment: "",
    index: [{
      name: "appointment_user",
      unique: false,
      type: "BTREE",
      fields: ["appointment_user_id"]
    }]
  };
  const AppointmentModel = sequelize.define("appointment_model", attributes, options);
  return AppointmentModel;
};