const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    housing_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "housing_id"
    },
    housing_type_property: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_type_property"
    },
    housing_type: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_type"
    },
    housing_nb_room: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_nb_room"
    },
    housing_nb_bathroom: {
      type: DataTypes.STRING(45),
      allowNull: false,
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
      field: "housing_observation"
    },
    deleted: {
      type:  DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "deleted"
    },
    housing_address_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_address_id",
      references: {
        key: "address_id",
        model: "address"
      }
    },
    housing_equipment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_equipment_id",
      references: {
        key: "equipment_id",
        model: "equipment"
      }
    },
    housing_installation_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_installation_id",
      references: {
        key: "installation_id",
        model: "installation"
      }
    },
    housing_info_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_info_id",
      references: {
        key: "info_id",
        model: "info"
      }
    },
    housing_rule_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "housing_rule_id",
      references: {
        key: "rule_id",
        model: "rule"
      }
    }

  };
  const options = {
    tableName: "housing",
    comment: "",
    index: [{
      name: "housingAaddress",
      unique: true,
      type: "BTREE",
      fields: ["housing_address_id"]
    }, {
      name: "housingEquipment",
      unique: true,
      type: "BTREE",
      fields: ["housing_equipment_id"]
    }, {
      name: "housinInstalation",
      unique: true,
      type: "BTREE",
      fields: ["housing_installation_id"]
    }, {
      name: "housingInfo",
      unique: true,
      type: "BTREE",
      fields: ["housing_info_id"]
    }, {
      name: "housingRule",
      unique: true,
      type: "BTREE",
      fields: ["housing_rule_id"]
    }]
  };
  const HousingModel = sequelize.define("housing_model", attributes, options);
  return HousingModel;
};