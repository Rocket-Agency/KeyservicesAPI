const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    address_id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "address_id"
    },
    address_road_number: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "address_road_number"
    },
    address_road_type: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "address_road_type"
    },
    address_road_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "address_road_name"
    },
    address_additional_info: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "address_additional_info"
    },
    address_state: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "address_state"
    },
    address_city: {
      type: DataTypes.STRING(50),
      allowNull: false, 
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "address_city"
    },
    address_zip_code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "address_zip_code"
    },
    address_txt: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "address_txt"
    },
    address_primaire: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "address_primaire"
    },
    deleted: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "deleted"
    }
    // address_user_id: {
    //   type: DataTypes.INTEGER(11),
    //   allowNull: false,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "address_user_id",
    //   references: {
    //     key: "user_id",
    //     model: "users"
    //   }
    // }
  };
  const options = {
    tableName: "address",      
    comment: "",
    // index: [{
    //   name: "usersid",
    //   unique: true,
    //   type: "BTREE",
    //   fields: ["address_user_id"]
    // }]
  };
  const AddressModel = sequelize.define("address_model", attributes, options);
  return AddressModel;
};