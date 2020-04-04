const {
    DataTypes
  } = require('sequelize');
  
  module.exports = sequelize => {
    const attributes = {
      contact_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "contact_id"
      },
      contact_last_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "contact_last_name"
      },
      contact_first_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "contact_first_name"
      },
      contact_email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "contact_email"
      },
      contact_object: {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "contact_object"
      },
      contact_message: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "contact_message"
      }
    };
    const options = {
      tableName: "contact",
      timestamps: false,
      comment: "",
      indexes: []
    };
    const ContactModel = sequelize.define("contact", attributes, options);
    return ContactModel;
  };