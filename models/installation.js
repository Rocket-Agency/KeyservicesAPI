const {
    DataTypes
  } = require('sequelize');
  
  module.exports = sequelize => {
    const attributes = {
      installation_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "installation_id"
      },
      installation_parking: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: true,
        comment: null,
        field: "installation_parking"
      },
      installation_gym: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: true,
        comment: null,
        field: "installation_gym"
      },
      installation_pool: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: true,
        comment: null,
        field: "installation_pool"
      },
      installation_jaccuzi: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: true,
        comment: null,
        field: "installation_jaccuzi"
      }
    };
    const options = {
      tableName: "installation",
      comment: "",
      indexes: []
    };
    const installationModel = sequelize.define("installation_model", attributes, options);
    return installationModel;
  };