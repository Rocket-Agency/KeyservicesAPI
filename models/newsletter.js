const {
    DataTypes
  } = require('sequelize');
  
  module.exports = sequelize => {
    const attributes = {
      newsletter_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "newsletter_id"
      },
      newsletter_email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "newsletter_email"
      },
      newsletter_ville: {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "newsletter_ville"
      },
    };
    const options = {
      tableName: "newsletter",
      timestamps: false,
      comment: "",
      indexes: []
    };
    const NewsletterModel = sequelize.define("newsletter", attributes, options);
    return NewsletterModel;
  };