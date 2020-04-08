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
      autoIncrement: true,
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
    housing_nb_room: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_nb_room"
    },
    housing_nb_bathroom: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_nb_bathroom"
    },
    housing_observation: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_type"
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
    },
    housing_installation_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_installation_id",
      references: {
        key: "installation_id",
        model: "installation_model"
      }
    },
    housing_info_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_info_id",
      references: {
        key: "info_id",
        model: "info_model"
      }
    },
    housing_rule_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_rule_id",
      references: {
        key: "rule_id",
        model: "rule_model"
      }
    }

  };
  const options = {
    tableName: "housing",
    comment: "",
    indexes: [{
      name: "housinAaddress",
      unique: false,
      type: "BTREE",
      fields: ["housing_adress_id"]
    }, {
      name: "housingEquipment",
      unique: false,
      type: "BTREE",
      fields: ["housing_equipment_id"]
    }, {
      name: "housinInstalation",
      unique: false,
      type: "BTREE",
      fields: ["housing_installation_id"]
    }, {
      name: "housingInfo",
      unique: false,
      type: "BTREE",
      fields: ["housing_info_id"]
    }, {
      name: "housingRule",
      unique: false,
      type: "BTREE",
      fields: ["housing_rule_id"]
    }]
  };
  const HousingModel = sequelize.define("housing_model", attributes, options);
  return HousingModel;
};