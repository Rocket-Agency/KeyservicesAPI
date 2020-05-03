const {
    DataTypes
  } = require('sequelize');
  
  module.exports = sequelize => {
    const attributes = {
      rule_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "rule_id"
      },
      rule_age_2_12: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "rule_age_2_12"
      },
      rule_age_2: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "rule_age_2"
      },
      rule_pets: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "rule_pets"
      },
      rule_smoking: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "rule_smoking"
      },
      rule_event: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "rule_event"
      },
      rule_add: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        comment: null,
        field: "rule_add"
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
      tableName: "rule",
      comment: "",
      indexes: []
    };
    const ruleModel = sequelize.define("rule_model", attributes, options);
    return ruleModel;
  };